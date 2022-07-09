<template>
    <div id="home">
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
            <div class="right">
                <div id="start" class="info">
                    <p v-if="count === 1">Create a new account, it's free and you don't need to provide your email</p>
                    <p v-if="count === 2">Log in to edit your game library and compare it to your friends</p>
                    <p v-if="count === 3">Do you have an idea to improve the application or a bug with it ?</p>
                    <p v-if="count === 4">Who ? When ? How ? Here is the information about the app, developers and github</p>
                    <p v-if="count === 5">This ? it's useless, at least for now ... but it's look cool rigth ?</p>
                </div>
            </div>
        </main>
    </div>
</template>


<script setup>
import Nav from '../components/Nav.vue'
import LeaderLine from 'leader-line-vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const count = ref(1)

let line = null
onMounted(() => {
    line = LeaderLine.setLine(
        document.querySelector('#start'),
        LeaderLine.obj.pointAnchor(document.querySelector(`#link-${count.value}`), {
            x: '100%',
            y: '25%'
        }),
        {
            color: '#E27429',
            startPlug: 'disc',
            dropShadow: {dx: 0, dy: 1},
            hide: true
        }
    )
    line.show('draw', {duration: 600, timing: 'ease-in-out'})

    setInterval(() => {
        line.remove()
        count.value == 5 ? count.value = 1 : count.value++
        line = LeaderLine.setLine(
            document.querySelector('#start'),
            LeaderLine.obj.pointAnchor(document.querySelector(`#link-${count.value}`), {
                x: '100%',
                y: '25%'
            }),
            {
                color: '#E27429',
                startPlug: 'disc',
                dropShadow: {dx: 0, dy: 1},
                hide: true
            }
        );
        line.show('draw', {duration: 600, timing: 'ease-in-out'})
    }, 6000);
})

onBeforeUnmount(() => {
    line.remove()
})
</script>

<style scoped>
#home{
    display: grid;
    place-items: center;
    background: #454651;
}
main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
}
@media screen and (max-width: 1000px)
{
    main{
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr
    }
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rampart One', cursive;
    font-size: 54px;
}
.left, .right{
    display: flex;
    justify-content: center
}
.left .info{
    width: 80%;
}
.right .info{
    width: 50%;
}
.left .info h1{
    margin-bottom: 30px;
    font-weight: 800;
    color: #DDD;
    text-shadow: -2px 4px 0 rgba(0,0,0,0.3);
}
.left .info p, .right .info p{
    margin-top: 10px;
    padding: 0px 10px;
    font-weight: 600;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    color: #BBB;
}

</style>