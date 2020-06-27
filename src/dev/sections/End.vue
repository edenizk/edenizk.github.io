<template>
  <section class="space_sections" id="end">
    <div class="home__title"
        style="color: white;"
        data-aos="fade-up"
        data-aos-duration="3000">
      Ergin Deniz
      <br />Kösecioğlu
      <br />
      <span style="color:#0FDFEB;">
        - an
        IT guy -
      </span>
      <br />
      <span>Good Bye</span>
    </div>
    <img
      class="stars"
      style="top: 0; right: 120vh; transform: rotate(-130deg);"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
    />
    <img
      class="stars"
      style="top: 0; right: 35vh; transform: rotate(-130deg);"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
    />
    <img id="end_comet"
        src="../../assets/materials/projects/comet.svg"
        alt="comet"
        data-aos="fade-down-left"
        data-aos-delay="300"
        data-aos-duration="2000" />
    <img class="home__sun"
        src="../../assets/materials/contacts/moon.svg"
        alt="sun"
        data-aos="fade-up-left"
        data-aos-duration="1500" />
    <img
        class="home__city"
        src="../../assets/materials/end/city_night.svg"
        alt="city"
        data-aos="fade-left"
        data-aos-duration="1000"
    />
    <Waves darkWaves/>
    <img
      class="home__front"
      style="z-index: 2;"
      src="../../assets/materials/intro/front_bank.svg"
      alt="bench and ground"
    />
  </section>
</template>

<script>
import Waves from '../components/waves.vue';

export default {
  name: 'End',
  components: {
    Waves,
  },
};
</script>
