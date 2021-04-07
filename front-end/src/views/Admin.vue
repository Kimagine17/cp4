<template>
<div class = "admin">
  <h1>Admin Page</h1>
    <!-- Genre -->
    <div class="heading">
      <h2>Add a Genre</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="genreName" placeholder="Genre">
        <p></p>
        <button @click="uploadgenre">Upload</button>
      </div>
    </div>
    <div class="heading">
      <h2>Edit/Delete a Genre</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findGenre" placeholder="Search Genre">
        <div class="genreSuggestions" v-if="genreSuggestions.length > 0">
          <div class="genreSuggestion" v-for="s in genreSuggestions" :key="s.id" @click="selectGenre(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findGenreItem">
        <input v-model="findGenreItem.name">
        <p></p>
      </div>
      <div class="actions" v-if="findGenreItem">
        <button @click="deleteGenre(findGenreItem)">Delete</button>
        <button @click="editGenre(findGenreItem)">Edit</button>
      </div>
    </div>
    
    <!-- <div class="heading">
      <div class="circle">1</div>
      <h2>Add a Book</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title">
        <p></p>
        <input v-model="description" placeholder="Description">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="uploadbook">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <img :src="addItem.path" />
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Book</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title">
        <p></p>
        <input v-model="findItem.description">
        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      genreName: "",
      findGenre: "",
      findGenreItem: null,
      title: "",
      description: "",
      file: null,
      addGenre: null,
      addItem: null,
      genres: [],
      findName: "",
      findItem: null,
    }
  },
  computed: {
    genreSuggestions() {
      let genres = this.genres.filter(genre => genre.name.toLowerCase().startsWith(this.findGenre.toLowerCase()));
      return genres.sort((a, b) => a.name > b.name);
    }
  },
  created() {
    // this.getItems();
    this.getGenres();
  },
  methods: {
    async uploadgenre() {
      try {
        let r1 = await axios.post('/api/genres', {
          name: this.genreName,
        });
        this.addItem = r1.data;
        this.genreName = "";
      } catch (error) {
        console.log(error);
      }
    },
    async getGenres() {
      try {
          let response = await axios.get("/api/genres");
          this.genres = response.data;
          return true;
      } catch (error) {
          console.log(error);
      }
    }, 
    selectGenre(item) {
      this.findGenre = "";
      this.findGenreItem = item;
    },
    async deleteGenre(item) {
      try {
        console.log(item);
        await axios.delete("/api/genres/" + item._id);
        this.findGenre = "";
        this.findGenreItem = null;
        this.getGenres();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editGenre(item) {
      try {
        await axios.put("/api/genres/" + item._id, {
          name: this.findGenreItem.name,
        });
        this.findGenreItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
  }
}
//     fileChanged(event) {
//       this.file = event.target.files[0]
//     },
//     async uploadbook() {
//       try {
//         const formData = new FormData();
//         formData.append('photo', this.file, this.file.name, this.file.description)
//         let r1 = await axios.post('/api/photos', formData);
//         let r2 = await axios.post('/api/genres/:genreID/books', {
//           genre: this.genre,
//           title: this.title,
//           description: this.description,
//           path: r1.data.path,
//         });
//         this.addItem = r2.data;
//       } catch (error) {
//         //console.log("Problem");
//       }
//     },
//     async getItems() {
//       try {
//         let response = await axios.get("/api/books");
//         this.items = response.data;
//         return true;
//       } catch (error) {
//         //console.log(error);
//       }
//     },
//     selectItem(item) {
//       this.findTitle = "";
//       this.findItem = item;
//     },
//     async deleteItem(item) {
//       try {
//         await axios.delete("/api/books/" + item._id);
//         this.findItem = null;
//         this.getItems();
//         return true;
//       } catch (error) {
//         //console.log(error);
//       }
//     },
//     async editItem(item) {
//       try {
//         await axios.put("/api/books/" + item._id, {
//           title: this.findItem.title,
//           description: this.findItem.description,
//         });
//         this.findItem = null;
//         this.getItems();
//         return true;
//       } catch (error) {
//         //console.log(error);
//       }
//     },
//   },
// }
</script>

<style scoped>
.admin {
    height:100%;
    width: 90%;
    margin: 20px auto;
}
.image h2 {
  font-style: italic;
  font-size: 1em;
}
.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}
.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}
.add,
.edit {
  display: flex;
}
.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
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
/* Uploaded images */
.upload h2 {
  margin: 0px;
}
.upload img {
  max-width: 300px;
}
/* Suggestions */
.genreSuggestions {
  width: 200px;
  border: 1px solid #ccc;
}
.genreSuggestion {
  min-height: 20px;
}
.genreSuggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>