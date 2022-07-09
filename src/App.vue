<script setup>
import { watch } from "@vue/runtime-core";
import Head from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Head></Head>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
#app {
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DDD;
  background: #454651;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  color: #E27429;
  text-decoration: none;
}
</style>
