<template>
  <img @click="this.$router.push({ path: `/` })" src="../assets/logo.png" alt="Logo">
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  cursor: pointer;
}
</style>