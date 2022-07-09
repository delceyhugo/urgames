<template>
  <div id="new">
    <div class="card">
        <h1 class="title">Login</h1>
        <form action="">
            <div class="section">
                <label for="">Username</label>
                <input spellcheck="false" autocomplete="false" type="text">
            </div>
            <div class="section">
                <label for="">Password</label>
                <input spellcheck="false" autocomplete="false" type="password">
            </div>
            <div class="section">
                <Button style="margin-top: 3px">Login</Button>
            </div>

            
        </form>
    </div>
    <h4 class="footer" >You don't have an account ? <a @click="this.$router.push({ path: `/new` })" href=""> Sign-up</a></h4>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from '../components/Button.vue'

</script>

<style scoped>
#new{
    display: grid;
    place-items: center;
}
.card{
    position: relative;
    width: 400px;
    background-color: #3e4046;
    padding: 20px 10px;
}
.card::after{
    content: '';
    position: absolute;
    bottom: -20px;
    left: -10px;
    width: 100%;
    height: 20px;
    transform-origin: right;
    transform: skewX(-45deg);
    background-color: #36383e;
}
.card::before{
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    width: 20px;
    height: 100%;
    /* transform-origin: right; */
    transform: skewY(-45deg);
    background-color: #2f3133;
}
.title{
    margin-bottom: 15px;
    font-family: 'Rampart One', cursive;
}
.section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
}
.section label{
    margin-bottom: 5px;
}
.section input{
    outline: none;
    border: none;
    border-radius: 4px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    height: 25px;
    background: rgb(255, 255, 255);
    width: 250px;
}
.footer{
    margin-top: 25px;
}
</style>