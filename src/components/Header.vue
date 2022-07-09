<template>
    <div class="header">
        UR
        <Logo style="width:80px; margin: 0px 15px;"></Logo>
        GAMES
    </div>
    <div id="beta">
        Beta
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
</script>

<style>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rampart One', cursive;
    font-size: 54px;
}
#beta{
    position: absolute;
    width: 200px;
    height: 30px;
    background-color: rgba(226, 116, 41, 0.5);
    color: #FFF;
    line-height: 25px;
    top: 30px;
    left: -60px;
    text-align: center;
    vertical-align: middle;
    transform: rotate(-45deg);
    font-weight: bold;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    outline-offset: 2px;
    outline-style: dashed;
    outline-color: rgb(55, 55, 55);
}
</style>