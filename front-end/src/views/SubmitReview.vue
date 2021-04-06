<template>
    <div class="s-review">
        <h1>All about Reviews</h1>
        <div class="inputField-container">
            <div class="inputField">
                <div class="heading">
                    <h2>Add a Review:</h2>
                </div><!--heading-->
                <div class="add">
                    <div class="form">
                        <p>Choose a book:</p>
                        <multiselect label="name" v-model="book" :options="books"></multiselect>
                        <p>Who's writing the review?</p>
                        <multiselect track-by="id" label="name" v-model="person" :options="users"></multiselect>
                        <p>{{person}}</p>
                        <p>Write your review!</p>
                        <input v-model="review" placeholder="review">
                        <button @click="upload(book, person)">Upload</button>
                    </div><!--form-->
                    <div class="upload" v-if="addItem">
                        <h2>{{addItem.title}}</h2>
                        <img :src="addItem.path" />
                    </div><!--upload-->
                </div><!--add-->
            </div><!--inputField-->
            <div class="inputField">
                <div class="heading">
                    <h2>Edit/Delete a Review:</h2>
                </div> <!--heading-->
                <div class="edit">
                    <div class="form">
                        <p>Choose a Review:</p>
                        <multiselect label="name" v-model="findItem" :options="allReviews"></multiselect>
                        <p>You selected:{{findItem}}</p>
                    </div>
                    <div class="editing">
                        <div class="upload" v-if="findItem">
                            <p>Change Review:</p>
                            <input v-model="findItem.review">
                            <p></p>
                        </div><!--upload-->
                        <div class="actions" v-if="findItem">
                            <button class="action" @click="editItem(findItem)">Edit</button>
                            <button class="action" @click="deleteItem(findItem)">Delete</button>
                        </div><!--actions-->
                    </div> <!--editing-->
                </div><!--edit-->
            </div> <!--input field-->
        </div> <!--input field-container -->  
    </div><!--s-review-->
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';
export default {
    components: { Multiselect },
    name: 'SubmitReviews',
    data() {
        return {
            book: null,
            person: null,
            books: [],
            users: [],
            allReviews: [],
            findItem: null,
            addItem: null,
            review: "",
        }
    },
    created() {
        this.getBooks();
        this.getUsers();
        this.getAllReviews();
    },
    methods: {
        fileChanged(event) {
            this.file = event.target.files[0]
        },
        async upload(book, person) {
            try {
                let r1 = await axios.post("/api/books/" + book._id + "/persons/" + person._id + "/reviews", {
                    book: this.book,
                    person: this.person,
                    review: this.review
                });
                this.addItem = r1.data;
                this.review = "";
                this.book = null;
                this.person = null;
            } catch (error) {
                console.log(error);
            }
        },
        async getBooks() {
            try {
                let response = await axios.get("/api/books");
                this.books = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async getUsers() {
            try {
                let response = await axios.get("/api/persons");
                this.users = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async getAllReviews() {
            try {
                let response = await axios.get("/api/reviews");
                this.allReviews = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteItem(item) {
            try {
                await axios.delete("/api/reviews/" + item._id);
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },  
        async editItem(item) {
            try {
                await axios.put("/api/reviews/" + item._id, {
                    review: this.findItem.review,
                });
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style scoped>
.s-review {
    height:100%;
    width: 90%;
    margin: 20px auto;
}
.inputField-container {
    height: 100%;

}
.inputField {
    border: 2px solid #eb7f4d;
    background-color: antiquewhite;
    padding: 3%;
    margin: 3%;
    height: 100%;
}

.heading {
    margin-bottom: 20px;
    margin-top: 0px;
}

.heading h2 {
    margin-top: 0px;
    margin-left: 0px;
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
    margin-right: 50px;
}
.actions {
    padding: 3px;
    margin: 0px;
}
.action {
    margin: 15px;
}
.upload p, .actions p{
    margin: 0px;
    margin-bottom: 5px;
}

/* Tablet Styles */
@media only screen and (min-width: 500px) and (max-width: 999px) {  
    /* .add,
    .edit {
        display: flex;
    } */
}

/* Desktop Screen */
@media only screen and (min-width: 1000px) {
/*    .inputField-container {
        display: flex;
    } */
    .add,
    .edit {
        display: flex;
    }
}

</style>