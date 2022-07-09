<template>
    <button>
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
button{
    padding: 10px 15px;
    position: relative;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
button::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left: -5px;
    width: 100%;
    height: 10px;
    transform-origin: right;
    transform: skewX(-45deg);
    background-color: #bbbbbb;

}
button::before{
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    width: 10px;
    height: 100%;
    transform-origin: right;
    transform: skewY(-45deg);
    background-color: #999999;
}
button:active{
    transform: translate(-8px, 8px);
}
button:active::before{
    top: 0px;
    left: -3px;
    width: 3px;
}
button:active::after{
    bottom: -3px;
    left: -1.5px;
    height: 3px;
}
</style>