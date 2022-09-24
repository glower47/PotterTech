<template>
  <div class="content">
    <div class="main-text">
      <p class="title">Software solutions for your business, with no hustle</p>
      <p class="description"><strong style="color: var(--color3)">PotterTech</strong> is designed to make sure you never have to worry about <strong>technical stuff</strong> that come with building your <strong>website</strong> / <strong>application</strong> for your business, <strong><i>we will do that for you!</i></strong></p>
      <button class="nav-button" id="nav-button">Tell us your idea</button>
    </div>
    <br><br><br><br>
    <div class="text-center second-text">
      <div class="title" style="color: var(--color1)"><span style="color: var(--color4)"><strong>Grow</strong></span> & <span style="color: var(--color4)"><strong>Scale</strong></span> your business with us!</div>
    </div>
    <div class="services-container">
      <div class="service-box">
        <div class="icon-right">
          <svg fill="none" stroke="var(--color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m9 11 3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
        <div class="icon">
          <svg fill="var(--color2)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="service-text">
          <div class="service-title">Trustworthy</div>
          <div class="service-description">
            We confidently respect our <a href="" style="text-decoration: none;">policy</a> and we are committed to give you the best service possible
          </div>
        </div>

      </div>
      <div class="service-box">
        <div class="icon-right">
          <svg fill="none" stroke="var(--color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m9 11 3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
        <div class="icon">
          <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--color2)" d="M18 15a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
            <path fill="var(--color2)" d="M6 3a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <path d="M6 9v12"></path>
          </svg>
        </div>
        <div class="service-text">
          <div class="service-title">Industry Experience</div>
          <div class="service-description">
            With 2+ years of industry experience, we are going to use the latest technologies for your project just to ensure maximum efficiency and security          </div>
        </div>

      </div>
      <div class="service-box">
        <div class="icon-right">
          <svg fill="none" stroke="var(--color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m9 11 3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        </div>
        <div class="icon">
          <svg width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1a7 7 0 1 0 0 14 7 7 0 1 0 0-14z"></path>
  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"></path>
</svg>
        </div>
        <div class="service-text">
          <div class="service-title">Exclusively for you</div>
          <div class="service-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim doloremque earum, architecto repellat  fugi
          </div>
        </div>

      </div>
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
  height: 100%;
  /* margin: 70px 50px; */
  max-width: 1324px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  /* font-weight: 600; */
  letter-spacing: 2px;
  line-height: 1.1;
  margin: 0px;
}

.main-text {
  margin-top: 100px;
  margin-left: 100px;
  width: 40%;
  color: whitesmoke;
  line-height: 1.3;
  
}
.description{ 
  /* font-weight: 100; */
  font-size: 1rem;
  letter-spacing: 2px;
  margin: 20px 0px;
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
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
}
.nav-button:hover {
  transform: scale(1.06, 1.06);
}
.services-container {
  margin: 50px 0px;
  height: 100%;
  display: flex;
}
.service-box {
  /* justify-content: space-evenly; */
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  /* text-align: center; */
  border: 2px solid var(--color4);
  margin: 0px 30px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px -4px var(--color1);
  padding: 20px 0px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.service-box:hover {
  box-shadow: 0px 6px 20px 3px var(--color2);
  transform: translateY(-2%);
}
.service-title {
  font-family: "myFontBold";
  padding: 5px 0px;
  padding-bottom: 0px;
  padding-right: 10px;
  font-weight: bold;
  color: var(--color1);
  font-size: 20px;
  letter-spacing: 1px;
}
.service-description {
  color: var(--color1);
  padding: 10px 0px;
  padding-right: 10px;
  padding-top: 5px;
  font-weight: bold;
  font-size: 15px;
}
.icon {
  /* width: 15%; */
  height: 100%;
  display: flex;
  margin: 0px 15px;
  position: relative;
  justify-content: center;
  align-items: center;
}
.icon svg {
  width: 50px;
  height: 50px;
  /* margin: auto; */
}

.icon-right {
  width: 30px;
  height: 30px;
  display: block;
  position: absolute;
  top: 7px;
  right: 7px;
}
</style>
