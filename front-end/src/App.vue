<template>
<div class="main-container">
  <div id="app">
    <div id="menu">
      <div class="header">
        <router-link to="/">
          <div class="header-item">
            <img src="/images/logo.png">
          </div> <!--header-item-->
        </router-link>
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

        <div class="title">
          <h1>BOOKSY</h1>
        </div> <!--title-->
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

.footer-container {
  background-color: #dbdbdb;
  border: solid 2px black;
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
}
.footer-container a {
  text-decoration: none;
  color: black;
}
.footer-item {
    padding: 0% 5% 0% 1%;
}
.main-container {
    min-height: 100vh; /* will cover the 100% of viewport */
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 150px; /* height of your footer */
    width: 100%;
}

@media only screen and (min-width: 750px) {
    .footer-items {
        display: flex;
    }
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>