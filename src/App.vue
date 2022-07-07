<script setup>
import { watch } from "@vue/runtime-core";
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DDD;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
