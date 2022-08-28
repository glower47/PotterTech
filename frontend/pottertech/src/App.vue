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
  --color1: #08418B;
  --color2: #64C3ED;
  --color3: #C6EFF9;
  --color4: #3F7392;
}

#app {
  font-family: 'Roboto', sans-serif;
  background-color: var(--color3);
  height: 100vh;
  overflow: hidden;
}
</style>
