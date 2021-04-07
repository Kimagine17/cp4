<template>
  <div class="home">
    <div class="heading">
      <h1> Welcome to Booksy! </h1> 
      <h2> Browse below to find your favorite book. Check out the reviews, then head to our review
        page to add one of your own! </h2> 
    </div>
    <section class="image-gallery">
      <div class="image" v-for="book in books" :key="book.id">
        <h2>Title: {{book.name}}</h2>
        <!-- <h2>{{book.genre}}</h2> -->
        <!-- <h2>{{book.genre.name}}</h2> -->
        <h2>Description: {{book.description}}</h2>
        <img :src="book.photoPath" />
      </div>
    </section>
  </div> <!--home-->
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     books: [],
    }
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        let response = await axios.get("/api/books");
        this.books = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  height: 100%;
  width: 100%;
  /* border: 4px dashed red; */
}

.main-container {
  background-color: #eb7f4d;
}

.home {
  /* border: 4px dashed rgb(170, 170, 175); */
  height: 100vh;
  margin: 0%;
  padding: 3%;
  background-color: #eb7f4d;
  color:black;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}
.image-gallery {
  column-gap: 1.5em;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  padding: 10%;
  background-color: antiquewhite;
}
.image img {
  width: 100%;
}
/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}
/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}
/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>