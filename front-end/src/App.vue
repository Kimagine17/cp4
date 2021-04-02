<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <!-- <div class="logo">
        <img src="/ordinary.png">
      </div> -->
    </router-link>
    <div class="title">
      <h1>BOOKSY</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <p>Created by Hannah K. Nelson and Kimberly I. McKinnon!</p>
    <p>Contact us at kimberlite17@gmail.com or hknelson@gmail.com</p>
    <a href="https://github.com/Kimagine17/cp4/">Github</a>
  </div>
</div>
</template>