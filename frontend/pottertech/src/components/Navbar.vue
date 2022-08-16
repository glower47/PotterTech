<template>
  <div class="m-0 p-0 bg-primary navbar row">
    <div class="col-3">
        test
    </div>
    <div class="col-9 d-flex align-items-center justify-content-around text-center row">
        <div class="col-2 font-weight-bold">
            <a href="#">About</a>
        </div>
        <div class="col-2 font-weight-bold">
            <a href="#">Services</a>
        </div>
        <div class="col-2 font-weight-bold">
            <a href="#">Referee program</a>
        </div>
        <div class="col-2 nav-button font-weight-bold">
            <a href="#">Contact</a>
        </div>
    </div>

    <!-- <div style="margin: 2vh 4vw">aici vine logo-ul</div> -->
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
a{
    text-decoration: none;
    color: black
}
.navbar{
    height: 100px;
}
.nav-button{
    
    
    
}
.nav-button a{
    color: rgb(192, 89, 192);
}
.nav-button {
  position: relative;
  display: inline-block;
  padding: 15px 10px;
  /* width: 100px;
  height: 100px; */
  background-color: bisque;
  border-radius: 50px;
  box-shadow: 0 15px 2px rgba(202, 118, 118, 0.1);
  border-radius: 50px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.nav-button::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 50 5px 50px rgba(0, 0, 0, 0.445);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.nav-button:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.1, 1.1);
}

.nav-button:hover::after {
    opacity: 1;
}
</style>
