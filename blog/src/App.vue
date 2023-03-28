<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
          <a class="nav-link" href="#"><router-link to="/list">🔥</router-link></a>
          <a class="nav-link" href="#"><router-link to="/detail">😊</router-link></a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">📄</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="mt-4">
    <router-view :blog_list="blog_list"></router-view>
  </div>

  <!-- <List :blog_list="blog_list" /> -->
</template>

<script>
// import List from './components/List.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      blog_list: blog,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
