<template>
  <div class="m-0 p-0 h-100 w-100">
    <NavbarVue/>
  </div>
  
</template>

<script>
import BasePageVue from '../components/BasePage.vue';
import NavbarVue from '../components/Navbar.vue';

export default {
  name: 'HomePage',
  extends: BasePageVue,
  components: {
    NavbarVue
  }
}
</script>

<style>
</style>
