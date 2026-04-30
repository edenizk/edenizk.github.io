<template>
  <section class="home" id="home">
    <h1 class="home__title" data-aos="fade-up" data-aos-duration="3000">
      Ergin Deniz <br />Kösecioğlu<br />
      <span>- Software Engineer &amp; Web Dev -</span>
    </h1>
    <img
      class="home__sun"
      data-aos="fade-up-left"
      data-aos-duration="1500"
      data-aos-once="true"
      src="../../assets/svg/sun.svg"
      alt="sun"
    />
    <img
      class="home__city"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
      src="../../assets/svg/city4.svg"
      alt="city"
      data-aos-offset="-50"
    />
    <Waves />
    <img
      class="home__front"
      src="../../assets/svg/front_bank.svg"
      alt="bench and ground"
    />
    <div class="home__down-arrow">
      <a href="#underground" aria-label="Continue">
        <span></span>
      </a>
    </div>
  </section>
</template>

<script setup>
import Waves from '../components/Waves.vue'
</script>
