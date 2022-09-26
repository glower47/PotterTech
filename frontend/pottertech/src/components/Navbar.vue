<template>
  <div class="navbar" :class="{'navbar-scrolled': scrolled, 'less-radius': menuExtended }" id="navbar">
    <div class="logo-container left">
      <img class="logo" src="../assets/logoPotterTech.svg" alt="">
    </div>

    <button class="menu-button desk-hide" :class="{ opened: menuExtended }" @click="navButtonClick">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>

    <div class="nav-buttons dorpdown-content right" :class="{'dropdown-content-active': menuExtended, 'translate-on-scroll': scrolled}">
      <button class="hover-text">Referee program</button>
      <button class="hover-text">Our policy</button>
      <button :class="[ (menuExtended || scrolled) ? 'hover-text': 'nav-button' ]" id="nav-button">Contact</button>
    </div>
  </div>
  
</template>

<script>
  import BasePageVue from '../components/BasePage.vue';

  export default {
    name: 'Navbar',
    extends: BasePageVue,
    components: {
    }, 
    data() {
      return {
        menuExtended: false,
        scrolled: false
      }
    },
    methods: {
      navButtonClick: function() {
        this.menuExtended = !this.menuExtended;
      },
      scrollChecker: function() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          this.scrolled = true;
        else 
          this.scrolled = false;
      },
      
    },
    mounted() {
      window.addEventListener('scroll', this.scrollChecker);
    },
  };
</script>

<style scoped>
  .navText {
    border: none;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .nav-buttons {
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }

  .hover-text, .nav-button {
    letter-spacing: 1.5px;
    font-weight: 600;
    text-transform: uppercase;
    background: none;
    border: none;
    color: white;
    transition-duration: 0.5s;
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

  a {
    text-decoration: none;
    color: black
  }

  .navbar {
      height: 100px;
      width: 90%;
      position: sticky;
      transition: 0.8s;
      top: 0px;
      z-index: 99;
      box-sizing: border-box;
      padding: 12px 24px;
      max-width: 1200px;
      margin: auto;
  }

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
    width: 100%;
  }
  .logo-container {
    height: 80%;
  }

  body {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }

  .menu-button {
    background-color: transparent;
    position: relative;
    z-index: 100;
    border: none;
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    transition-duration: 0.5s;
  }

  .line {
    fill: none;
    stroke: var(--color3);
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .opened {
    border-radius: 50%;
    background-color: var(--color1);
    box-shadow: 0 14px 35px 0 rgba(9,9,12,0.4);
  }

  .navbar-scrolled .opened {
    box-shadow: unset;
  }

  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }

  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .desk-hide {
    display: none;
  }

  .navbar-scrolled {
    transition: all 200ms linear;
    height: 64px;
    background: var(--color1);
    box-shadow: 0px 11px 22px -9px var(--color1);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  @media only screen and (max-width: 900px) {

    .desk-hide {
      display: block;
    }

    .dorpdown-content {
      position: absolute;
      padding: 5px;
      background-color: var(--color1);
      top: 84px;
      left: 0;
      z-index: 2;
      opacity: 0;
      width: 100%;
      border-radius: 4px;
      box-shadow: 0 14px 35px 0 rgba(9,9,12,0.4);
      pointer-events: none;
      transform: translateY(32px);
      transition: all 200ms linear;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    .dropdown-content-active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(24px);
    }
    .dorpdown-content:after {
      position: absolute;
      top: -80px;
      right: 24px;
      width: 40px; 
      height: 84px; 
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      transition: all 200ms linear;
    }

    .less-radius {
      border-radius: 0px 0px 4px 4px;
    }

    .dorpdown-content button {
    background: none;
    width: 100%;
    color: var(--color3);
    padding: 12px;
    }

    .translate-on-scroll {
      transform: translateY(0px);
      transition: all 200ms linear;
    }

  }

</style>