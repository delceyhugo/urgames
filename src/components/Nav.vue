<template>
    <div class="nav">
        <ul id="menu">
            <li id="link-1" style="--i:5;" class="button">
                <router-link to="/new">new</router-link>
            </li>
            <li id="link-2" style="--i:4;" class="button">
                <router-link to="/login">continue</router-link>
            </li>
            <li id="link-3" style="--i:3;" class="button">
                <router-link to="/support">support</router-link>
            </li>
            <li id="link-4" style="--i:2;" class="button">
                <router-link to="/about">about</router-link>
            </li>
            <li id="link-5" style="--i:1;" class="button">
                <a href="">quit</a>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
.nav {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    margin: 0px;
    background: #454651;
    font-family: "Oswald", sans-serif;
    padding: 60px 0px 40px 0px;
}

#menu {
    list-style: none;
    position: relative;
    transform: skewY(-15deg);
}

.button {
    position: relative;
    height: 50px;
    width: 200px;
    background-color: #3e4046;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    font-weight: 600;
    z-index: var(--i);
    transition: 0.5s;
}

.button:hover {
    background-color: #E27429;
    transform: translateX(-50px);
}
.button:hover::before, .button:hover::after{
    background-color: #D55209;
}

a {
  display: block;
  color: rgb(139, 139, 139);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  user-select: none;
  -webkit-user-drag: none;
}
.button:hover a {
  color: white;
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -40px;
  width: 40px;
  height: 100%;
  transform-origin: right;
  transform: skewY(45deg);
  background-color: #2f3133;
  transition: 0.5s;
}

.button::after {
  content: "";
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  transform-origin: bottom;
  transform: skewX(45deg);
  background-color: #36383e;
  transition: 0.5s;
}

.button:last-child::after {
  box-shadow: -120px 120px 20px rgba(0, 0, 0, 0.25);
}


</style>