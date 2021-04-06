<template>
    <div class="s-person">
        <h1>All about users!</h1>
        <div class="heading">
            <h2>Create new user:</h2>
        </div> <!--heading-->
        <div class="add">
            <div class="form">
                <input v-model="name" placeholder="Name">
                <p></p>
                <input v-model="about" placeholder="About You">
                <p></p>
                <button @click="upload">Upload</button>
            </div>
            <div class="upload" v-if="addItem">
                <h2>{{addItem.title}}</h2>
                <img :src="addItem.path" />
            </div>
        </div>
        <div class="heading">
            <h2>Edit/Delete a user:</h2>
        </div> <!--heading-->
        <div class="edit">
            <div class="form">
                <input v-model="findName" placeholder="Search Name">
                <div class="suggestions" v-if="suggestions.length > 0">
                    <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.name}}
                    </div>
                </div>
            </div>
            <div class="upload" v-if="findItem">
                <input v-model="findItem.name">
                <p></p>
               <input v-model="findItem.about">
                <p></p>
            </div>
            <div class="actions" v-if="findItem">
                <button @click="deleteItem(findItem)">Delete</button>
                <button @click="editItem(findItem)">Edit</button>
            </div>
        </div><!--edit-->
    </div> <!--class="s-person" -->

</template>


<script>
import axios from 'axios';
export default {
    name: 'SubmitPersons',
    data() {
        return {
            name: "",
            about: "",
            items: [],
            findName: "",
            findItem: null,
            addItem: null,
        }
    },
    computed: {
        suggestions() {
            let items = this.items.filter(item => item.name.toLowerCase().startsWith(this.findName.toLowerCase()));
            return items.sort((a, b) => a.name > b.name);
        }
    },
    created() {
        this.getItems();
    },
    methods: {
        fileChanged(event) {
            this.file = event.target.files[0]
        },
        async upload() {
            try {
                let r1 = await axios.post('/api/persons', {
                    name: this.name,
                    about: this.about
                });
                this.addItem = r1.data;
                this.name = "";
                this.about = "";
            } catch (error) {
                console.log(error);
            }
        },
        async getItems() {
            try {
                let response = await axios.get("/api/persons");
                this.items = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        selectItem(item) {
            this.findName = "";
            this.findItem = item;
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
