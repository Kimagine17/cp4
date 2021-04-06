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
                    </div>
                    <div class="editing">
                        <div class="upload" v-if="findItem">
                            <p>Change Name:</p>
                            <input v-model="findItem.name">
                            <p></p>
                            <p>Change About:</p>
                            <input v-model="findItem.about">
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
                await axios.delete("/api/persons/" + item._id);
                this.findItem = null;
                this.getItems();
                return true;
            } catch (error) {
                console.log(error);
            }
        },  
        async editItem(item) {
            try {
                await axios.put("/api/persons/" + item._id, {
                name: this.findItem.name,
                about: this.findItem.about,
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
