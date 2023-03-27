<template>
  <div class="black-bg" v-if="modalopen == true">
    <div class="white-bg">
      <h4>{{ oneroom[nowclick].title }}</h4>
      <p>{{ oneroom[nowclick].content }}</p>
      <img :src="oneroom[nowclick].image" style="50%">
      <p>{{ oneroom[nowclick].price }}원</p>
      <Discount />
      <button @click="modalopen = false">닫기</button>
    </div>

  </div>

  <div class="menu">
    <a v-for="a in menus" :key="a">{{ a }}</a>
  </div>

  <Discount />

  <div v-for="(a, i) in oneroom" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="modalopen = true; nowclick = i">{{ a.title }}</h4>
    <p>{{ a.price }}원</p>
  </div>
</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';

export default {
  name: 'App',
  data() {
    return {
      nowclick: 0,
      oneroom: data,
      modalopen: false,
      silen: [0, 0, 0],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {
    increase() {
      this.silen++;
    }
  },
  components: {
    Discount,
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
