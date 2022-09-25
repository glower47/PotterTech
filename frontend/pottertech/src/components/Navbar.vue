<template>
  <div class="navbar" id="navbar">
    <div class="logo-container left">
      <img class="logo" src="../assets/logoPotterTech.svg" alt="">
    </div>
    <div class="nav-buttons right">
      <button class="hover-text">Policy</button>
      <button class="hover-text">Referee program</button>
      <button class="nav-button" id="nav-button">Contact</button>
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

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar").style.background = "var(--color1)";
    document.getElementById("navbar").style.boxShadow = "0px 11px 22px -9px var(--color1)";
    document.getElementById("nav-button").classList.remove("nav-button");
    document.getElementById("nav-button").classList.add("hover-text");
    document.getElementById("navbar").style.borderBottomRightRadius = "20px";
    document.getElementById("navbar").style.borderBottomLeftRadius = "20px";
    // document.getElementById("navbar").style.maxWidth = "inherit";


  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar").style.background = "initial";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("nav-button").classList.add("nav-button");
    document.getElementById("nav-button").classList.remove("hover-text");
    // document.getElementById("navbar").style.maxWidth = "1324px";
    // document.getElementById("hover-text").style.setProperty("--color1", "--color2");
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
  /* opacity: 100% !important; */
  font-size: 15px;
  width: 45%;
  display: flex;
  justify-content: space-between;
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
  transform-origin: bottom 50%;
  transition: transform 0.45s ease-out;
}

.hover-text:hover:after {
  transform: scaleX(1);
  transform-origin: bottom 50%;
}
a{
    text-decoration: none;
    color: black
}
.navbar{
    height: 100px;
    /* display: flex; */
    position: sticky;
    transition: 0.8s;
    top: 0px;
    z-index: 99;
    width: 100% !important;
    max-width: 1324px;
    margin: auto;
    /* background-color: var(--color1); */
    /* background-image: linear-gradient(var(--color1), var(--color3)); */
    /* opacity: 50%; */
}
/* .navbar {
  top: 30px;
} */
.nav-button {
  padding: 14px 25px;
  background-color: var(--color3);
  border-radius: 50px;
  box-shadow: 0px 0px 10px var(--color4);
  border-radius: 50px;
  font-weight: bold !important;
  color: var(--color1);
  transition: all 0.35s linear;
}
.nav-button:hover {
  transform: scale(1.06, 1.06);
}

.logo {
  background: transparent;
  height: 100%;
  /* margin: 0px 10px; */
  width: 100%;
}
.logo-container {
  height: 80%;
  /* margin: 0px 10px; */
}
</style>