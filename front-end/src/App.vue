<template>
<div class="main-container">
  <div class="container">
    <div id="app">
      <div id="menu">
        <div class="header">
          <!-- <div class="header-logo">   -->
            <router-link class="header-logo" to="/">
              <img class="image" src="./assets/Booksy (2).png">
            </router-link>
          <!-- </div> header-logo -->
          <div class="header-items"> 
            <div class="header-item">
              <router-link to="/">
                <p>Home</p>
              </router-link>
            </div> <!--header-item-->
            <div class="header-item">
              <router-link to="/SubmitReview">
                <p>Review a Book</p>
              </router-link>
            </div> <!--header-item-->
            <div class="header-item">
              <router-link to="/SubmitPerson">
                <p>Create a Person</p>
              </router-link>
            </div> <!--header-item-->
          </div> <!--header-items-->

          <!-- <div class="title">
            <h1>BOOKSY</h1>
          </div> title -->
        </div> <!--header-->
      </div><!-- menu -->
      <div class="content">
        <router-view />
      </div> <!-- content -->
    </div><!-- app-->
  </div> <!--container-->
  <div class="footer-container">
    <div class="footer">
      <!-- <div class="footer-item"> -->
        <router-link class="footer-item" to="/Admin">Admin</router-link>
      <!-- </div>footer-item -->
      <!-- <div class="footer-item"> -->
        <a class="footer-item" href="https://github.com/Kimagine17/cp4/">Github</a>
      <!-- </div>footer-item -->
      <div class="footer-item">
        <p>Created by Hannah K. Nelson and Kimberly I. McKinnon</p>
      </div><!--footer-item-->
      <div class="footer-item">
        <p>Contact us at kimberlite17@gmail.com or hknelson@gmail.com</p>
      </div><!--footer-item-->
    </div> <!--footer-->
  </div> <!--footer-container-->

</div> <!--main-container-->
</template>




<style>
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
  /* background-color: red; */
  height: 100%;
  min-height: 100vh; /*will cover the 100% of viewport*/
  /* overflow: hidden; */
  display: block;
  position: relative;
  /* padding-bottom: 150px; height of your footer */
  width: 100%;
  /* border: 5px dashed orange; */
}
.container {
  /* background-color: red; */
  height: 100%;
  min-height: 100vh; 
  /* overflow: hidden; */
  display: block;
  /* position: relative; */
  padding-bottom: 100px; 
  width: 100%;
  /* border: 5px dashed yellow; */
}
#app {
  height: 100%;
  /* border: 5px dashed green; */
}

/*html {
  height: 100vh;
  width: 100%
  border: 10px dashed black;
} */

.content
{
  height: 100%;
  /* border: 5px dashed blue; */
}




.router-link-exact-active, .header-item a {
  text-decoration: none;
}

#menu {
  width: 100%;
  background-color: #062d62;
}

.header {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
}

.header-logo {
  width: 30%;
  margin: auto auto auto 3%;
}

.image {
  width: 100%;
  padding: 0%;
}

.header-items {
  justify-content: flex-end;
  font-size: 1.5em;
  width: 100%;
  margin: 1% 0% 1% 0%;
  /* padding-bottom: 4%; */
}

.header-item {
  color: antiquewhite;
  /* background-color: red; */
  text-decoration: none;
}

:link, :visited {
  color: antiquewhite;
}

.router-link-exact-active {
  color: rgb(235, 127, 77);
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
    height: 100px;
    justify-content: center; 
    /* display: flex; */
}
.footer-item a {
  text-decoration: none;
  color: white;
  /* margin-top: auto;
  margin-bottom: auto; */
}
.footer-item {
    padding: 2% 5% 1% 1%;
    color: white;
}



@media only screen and (min-width: 750px) {
    .image{
      width:100%; 
      vertical-align:middle;
    }
    
    .header {
      display: flex;
    }

    .header-logo {
      width: 10%;
      margin: auto auto auto 2%;
    }
    
    .header-items {
      justify-content: flex-end;
      font-size: 1.3em;
      width: 100%;
      /* background-color: yellow; */
      display: flex;
      margin: 0% 4% 0% 0%;
      padding-bottom: 0%;

    }
    .header-items {
      justify-content: flex-end;
      font-size: 1.3em;
      width: 100%;
      /* background-color: yellow; */
      display: flex;
      margin: 0% 4% 0% 0%;
      padding-bottom: 0%;
    }

    .header-item {
      padding: 2%;
    }

    .footer {
      display: flex;
    }
}

</style>