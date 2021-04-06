<template>
<div class="main-container">
  <div id="app">
    <div id="menu">
      <div class="header">
        <div class="header-logo">  
          <router-link to="/">
            <img src="./assets/Booksy.png" width=100%;>
          </router-link>
        </div> <!--header-item-->
        
        <router-link to="/">
          <div class="header-item">
            <p>Home</p>
          </div> <!--header-item-->
        </router-link>
        <router-link to="/SubmitBook">
          <div class="header-item">
            <p>Submit a Book!</p>
          </div> <!--header-item-->
        </router-link>
        <router-link to="/SubmitReview">
          <div class="header-item">
            <p>Review a Book!</p>
          </div> <!--header-item-->
        </router-link>
        <router-link to="/SubmitPerson">
          <div class="header-item">
            <p>Create a Person!</p>
          </div> <!--header-item-->
        </router-link>

        <!-- <div class="title">
          <h1>BOOKSY</h1>
        </div> title -->
    </div> <!--header-->
    </div><!-- menu -->
    <div class="content">
      <router-view />
    </div> <!-- content -->
  </div><!-- app-->

  <div class="footer-container">
    <div class="footer">
      <div class="footer-item">
        <p>Created by Hannah K. Nelson and Kimberly I. McKinnon!</p>
      </div><!--footer-item-->
      <div class="footer-item">
        <p>Contact us at kimberlite17@gmail.com or hknelson@gmail.com</p>
      </div><!--footer-item-->
      <div class="footer-item">
        <a href="https://github.com/Kimagine17/cp4/">Github</a>
      </div><!--footer-item-->
    </div> <!--footer-->
  </div> <!--footer-container-->

</div> <!--main-container-->
</template>




<style>
* {
  box-sizing: border-box;
}

.main-container {
  /* background-color: red; */
  height: 100%;
  /* min-height: 100vh; will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 150px; /* height of your footer */
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

#menu {
  /* display: flex; */
  width: 100%;
  background-color: #062d62;
}

.header {
  width: 100%;
  display: flex;
}

.header-logo {
  color: antiquewhite;
  width: 20%;
}

.header-item {
  color: antiquewhite;
  width: 20%;
  padding: 5%;
  background-color: red;
  text-decoration: none;
}

.footer-container {
  background-color: #062d62;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px; 
  left: 0;
  text-align: center;
  justify-content: center; 
}
.footer {
    width: 100%;
    justify-content: center; 
    display: flex;
}
.footer-item a {
  text-decoration: none;
  color: white;
  /* margin-top: auto;
  margin-bottom: auto; */
}
.footer-item {
    padding: 0% 5% 0% 1%;
    color: white;
}

.main-container {
  /* background-color: red; */
  height: 100%;
  /* min-height: 100vh; will cover the 100% of viewport */
  /* overflow: hidden;
  display: block; */
  position: relative;
  padding-bottom: 150px; /* height of your footer */
  width: 100%;
}

/* #menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
} */

@media only screen and (min-width: 750px) {
    /* .footer-items {
        display: flex;
    } */
}

</style>