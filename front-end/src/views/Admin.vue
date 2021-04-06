<template>
<div class = "admin">
  <h1>Admin Page</h1>
    <!--Genre-->
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add a Genre</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="genre" placeholder="Genre">
        <p></p>
        <button @click="uploadgenre">Upload</button>
      </div>
      <div class="upload" v-if="addGenre">
        <h2>{{addItem.genre}}</h2>
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Genre</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findGenre" placeholder="Search">
        <div class="suggestions" v-if="suggestions1.length > 0">
          <div class="suggestion" v-for="s in suggestions1" :key="s.id" @click="selectGenres(s)">{{s.selectGenres}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findGenre">
        <input v-model="findGenre.genre">
        <p></p>
      </div>
      <div class="actions" v-if="findGenre">
        <button @click="deleteGenre(findGenre)">Delete</button>
        <button @click="editGenre(findGenre)">Edit</button>
      </div>
    </div>
    
    <!--Book-->
    <div class="heading">
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
        <h2>{{addBook.title}}</h2>
        <img :src="addBook.path" />
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Book</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions2.length > 0">
          <div class="suggestion" v-for="s in suggestions2" :key="s.id" @click="selectBook(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findBook">
        <input v-model="findBook.title">
        <p></p>
        <input v-model="findBook.description">
        <p></p>
        <img :src="findBook.path" />
      </div>
      <div class="actions" v-if="findBook">
        <button @click="deleteBook(findBook)">Delete</button>
        <button @click="editBook(findBook)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      genre: "",
      title: "",
      description: "",
      file: null,
      addGenre: null,
      addBook: null,
      genres: [],
      books: [],
      findGenre: "",
      findTitle: "",
      findBook: null,
    }
  },
  computed: {
    suggestions1() {
      let genres = this.genres.filter(genre => genre.genre.toLowerCase().startsWith(this.findGenre.toLowerCase()));
      return genres.sort((a, b) => a.genre > b.genre);
    },
    suggestions2() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getBooks();
    this.getGenres();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async uploadgenre() {
      try {
        let r1 = await axios.post('/api/genres', {
          genre: this.genre,
        });
        this.addGenre = r1.data;
      } catch (error) {
        //console.log("Problem");
      }
    },
    async uploadbook() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.title, this.file.description)
        let r1 = await axios.post('/api/books', formData);
        let r2 = await axios.post('/api/books', {
          title: this.title,
          description: this.description,
          path: r1.data.path,
        });
        this.addBook = r2.data;
      } catch (error) {
        //console.log("Problem");
      }
    },
    async getGenres() {
      try {
        let response = await axios.get("/api/genres");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async getBooks() {
      try {
        let response = await axios.get("/api/books");
        this.items = response.data;
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    selectGenre(genre) {
      this.findGenre = genre;
    },
    selectBook(book) {
      this.findTitle = "";
      this.findBook = book;
    },
    async deleteGenre(genre) {
      try {
        await axios.delete("/api/genres/" + genre._id);
        this.findGenre = null;
        this.getGenres();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async deleteBook(book) {
      try {
        await axios.delete("/api/books/" + book._id);
        this.findBook = null;
        this.getBooks();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async editGenre(genre) {
      try {
        await axios.put("/api/genres/" + genre._id, {
          genre: this.findGenre.genre,
        });
        this.findGenre = null;
        this.getGenres();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async editBook(book) {
      try {
        await axios.put("/api/books/" + book._id, {
          title: this.findBook.title,
          description: this.findBook.description,
        });
        this.findBook = null;
        this.getBooks();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
  },
}
</script>

<style scoped>
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
.suggestions1, .suggestions2 {
  width: 200px;
  border: 1px solid #ccc;
}
.suggestion {
  min-height: 20px;
}
.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>