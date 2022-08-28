<template>
  <div class="m-0 p-0 navbar">
    <div class="left m-3">
      logo
    </div>
    <div class="nav-buttons right m-3">
      <button class="hover-text">Services</button>
      <button class="hover-text">Referee program</button>
      <button class="nav-button">Contact</button>
    </div>
  </div>
  
</template>

<script>
import BasePageVue from '../components/BasePage.vue';

export default {
  name: 'Navbar',
  extends: BasePageVue,
  components: {
  }
}
</script>

<style scoped>
.navText{

  border: none;
  display: flex;
  justify-content: center;
  margin: auto;
}

.nav-buttons{
  font-size: 1.1vw;
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
}

.hover-text, .nav-button{
  letter-spacing: 1.5px;
  font-weight: 600;
  text-transform: uppercase;
  background: none;
  border: none;
  color: white;
}
.hover-text {
  display: inline-block;
  position: relative;
}
.hover-text:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: var(--color3);
  transform-origin: bottom right;
  transition: transform 0.45s ease-out;
}

.hover-text:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
a{
    text-decoration: none;
    color: black
}
.navbar{
    height: 110px;
    background-color: var(--color1);
    background-image: linear-gradient(var(--color1), var(--color3));
}
.nav-button {
  padding: 14px 25px;
  background-color: var(--color3) !important;
  border-radius: 50px;
  box-shadow: 0 6px 10px var(--color1);
  border-radius: 50px;
  font-weight: bold !important;
  color: var(--color4) !important;
  transition: all 0.6s linear;
}
.nav-button:hover {
  transform: scale(1.04, 1.04);
}
</style>
