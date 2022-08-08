<template>
  <div class="about">
    <div class="container">
      <h1>TVShow</h1>

      <p> TVShow App is a Vue 3 application that allows you to browse TV Shows via tvmaze API.
        It is two days challenge part of an interview process for a frontend job position.</p>

      <p> For this project I decided to use Vue.js v3 in combination with TypeScript, Pinia and Vue Router.
        Basic project setup has configured via Vue 3 in Vite.</p>

      <p>This application shows popular Tv Shows from the Tvmaze API.
        Details fo a Tv shows like episodes, cast, crew. Also, categorize in genres and functionality to search. And it is mobile responsive</p>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
