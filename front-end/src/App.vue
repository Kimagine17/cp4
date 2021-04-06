<template>
<div class="main-container">
  <div id="app">
    <div id="menu">
      <div class="header">
        <div class="header-logo">  
          <router-link to="/">
            <img src="./assets/Booksy (2).png" width=100%; vertical-align=middle;>
          </router-link>
        </div> <!--header-logo-->
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
              <p>Create User</p>
            </router-link>
          </div> <!--header-item-->
        </div> <!--header-items-->
    </div> <!--header-->
    </div><!-- menu -->
    <div class="content">
      <router-view />
    </div> <!-- content -->
  </div><!-- app-->

  <div class="footer-container">
    <div class="footer">
      <div class="footer-item">
        <router-link to="/Admin">
          <p>Admin</p>
        </router-link>
      </div><!--footer-item-->
      <div class="footer-item">
        <a href="https://github.com/Kimagine17/cp4/">Github</a>
      </div><!--footer-item-->
      <div class="footer-item">
        <p>Contact us at kimberlite17@gmail.com</p>
      </div><!--footer-item-->
      <div class="footer-item">
        <p>Created by Hannah K. Nelson and Kimberly I. McKinnon!</p>
      </div><!--footer-item-->
    </div> <!--footer-->
  </div> <!--footer-container-->
</div> <!--main-container-->
</template>




<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  height: 100vh;
  width: 100%
}

.main-container {
  /* background-color: red; */
  height: 100%;
  min-height: 100vh; 
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

.router-link-exact-active, .header-item a {
  text-decoration: none;
}

#menu {
  /* display: flex; */
  width: 100%;
  background-color: #062d62;
}

.header {
  width: 100%;
  height: 100%;
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
  margin: 0% 4% 0% 0%;

}

.header-item {
  color: antiquewhite;
  padding: 2%;
  /* background-color: red; */
  text-decoration: none;
}

:visited {
  color: antiquewhite;
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
}

.footer-item, .footer-item a {
    margin: auto 4% auto 4%;
    color: white;
    text-decoration: none;
    justify-content: center;
}

.router-link-exact-active {
  color: #eb7f4d;
}

a:hover {
  color: #eb7f4d;
}

@media only screen and (min-width: 750px) {
    .header-items {
      justify-content: flex-end;
      font-size: 1.3em;
      width: 100%;
      /* background-color: yellow; */
      display: flex;
      margin: 0% 4% 0% 0%;
    }
    
    .footer {
      display: flex;
    }
}

</style>