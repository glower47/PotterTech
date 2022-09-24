<template>
  <HomePageVue/>
</template>

<script>
import HomePageVue from './pages/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePageVue
  }
}
</script>

<style>
:root {
  --color1: #023A68;
  --color2: #64C3ED;
  --color3: #C6EFF9;
  --color4: #024F8E;
}

@font-face {
    font-family: "myFontLight";
    src: url("./assets/Roboto-Light.ttf");
}

@font-face {
    font-family: "myFontBold";
    src: url("./assets/Roboto-Bold.ttf");
}

#app {
  font-family: "myFontLight";
  background-color: whitesmoke;
  height: 100%;
  /* overflow: hidden; */
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--color3); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: var(--color1); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color2);
}
</style>
