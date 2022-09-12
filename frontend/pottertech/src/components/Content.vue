<template>
  <div class="content">
    <div class="main-text">
      <p class="title">PotterTech</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, provident adipisci eum corrupti ducimus nulla</p>
    </div>
  </div>
</template>

<script>
import BasePageVue from "./BasePage.vue";
export default {
  name: "Content",
  extends: BasePageVue,
};
</script>

<style>
.content {
  height: 1000px;
  margin: 70px 50px;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  
}

.main-text { 
  margin: 0px 200px;
  margin-right: 700px;
  color: var(--color1);
}
.description{ 
  font-weight: 600;
  font-size: 27px;
}
</style>
