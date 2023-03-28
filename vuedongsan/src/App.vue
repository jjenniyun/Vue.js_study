<template>
  <transition name="fade">
    <Modal @closeModal="modalopen = false" :oneroom="oneroom" :nowclick="nowclick" :modalopen="modalopen" />
  </transition>

  <div class="menu">
    <a v-for="a in menus" :key="a">{{ a }}</a>
  </div>

  <Discount v-if="showDiscount == true" />
  <!-- <p>지금 결제하면 {{ amount }}% 할인</p> -->

  <button @click="low_priceSort">낮은가격순</button>
  <button @click="high_priceSort">높은가격순</button>
  <button @click="titleSort">상품 가나다순</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="modalopen = true; nowclick = i" :oneroom="oneroom[i]" v-for="(room, i) in oneroom" :key="room" />

  <!-- <div v-for="(a, i) in oneroom" :key="i"> -->
  <!-- <img :src="a.image" class="room-img"> -->
  <!-- <h4 @click="modalopen = true; nowclick = i">{{ a.title }}</h4> -->
  <!-- <p>{{ a.price }}원</p> -->
  <!-- </div> -->
</template>

<script>

import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data() {
    return {
      showDiscount: true,
      oneroom_ori: [...data],
      object: { name: 'kim', age: 20 },
      nowclick: 0,
      oneroom: data,
      modalopen: false,
      silen: [0, 0, 0],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      amount: 30,
    }
  },
  methods: {
    increase() {
      this.silen++;
    },
    sortBack() {
      this.oneroom = [...this.oneroom_ori];
    },
    low_priceSort() {
      this.oneroom.sort(function (a, b) {
        return a.price - b.price
      });
    },
    high_priceSort() {
      this.oneroom.sort(function (a, b) {
        return b.price - a.price
      });
    },
    titleSort() {
      this.oneroom.sort(function (c, d) {
        return c.title < d.title ? -1 : c.title > d.title ? 1 : 0
      }); // 오름차순 정렬
    },
  },
  // mounted() {
  // setInterval(() => {
  // this.amount--;
  // }, 1000);
  // },
  components: {
    Discount,
    Modal,
    Card,
  }
}
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
}

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
