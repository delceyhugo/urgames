<script setup>
import Nav from '../components/Nav.vue'

</script>

<template>
    <div id="home">
        <div class="header">
            <h1>Logo</h1>
        </div>
        <main>
            <div class="left">
                <div class="info">
                    <h1>Don't know what to play with your friends ?</h1>
                    <p>Create a library of all <b style="color: #E27429;">your games</b></p>
                    <p>Compare them with those of <b style="color: #E27429;">your friends</b></p>
                    <p>Then, you can find a game you all have and can <b style="color: #E27429;">play together.</b></p>
                </div>
            </div>
            <Nav></Nav>
            <div class="rigth"></div>
        </main>
        <div class="footer"></div>
    </div>
</template>

<style scoped>
#home{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #454651;
}
main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
}
.left{
    display: flex;
    justify-content: center
}
.left .info{
    width: 80%;
}
.left .info h1{
    margin-bottom: 30px;
    font-weight: 800;
    color: #DDD;
    text-shadow: -2px 4px 0 rgba(0,0,0,0.3);
}
.left .info p{
    margin-top: 10px;
    font-weight: 600;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    color: #BBB;
}
</style>