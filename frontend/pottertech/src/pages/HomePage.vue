<template>
  <div class="m-0 p-0 h-100 w-100">
    <NavbarVue/>
    <ContentVue/>
    <FooterVue/>

  </div>
  
</template>

<script>
import BasePageVue from '../components/BasePage.vue';
import NavbarVue from '../components/Navbar.vue';
import ContentVue from '../components/Content.vue';
import FooterVue from '../components/Footer.vue';

export default {
  name: 'HomePage',
  extends: BasePageVue,
  components: {
    NavbarVue,
    ContentVue,
    FooterVue
  }
}
</script>

<style>
</style>
