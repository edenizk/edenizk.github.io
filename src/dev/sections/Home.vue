<template>
    <section class="home" id="home">
      <div class="home__title" data-aos="fade-up"
     data-aos-duration="3000">Ergin Deniz
        <br/>Kosecioglu<br/>
        <span>- an IT guy -</span>
      </div>
      <img class="home__sun" data-aos="fade-up-left" data-aos-duration="1500"
       src="../../assets/svg/sun.svg" alt="sun">
      <img class="home__city" data-aos="fade-left" data-aos-duration="1000"
       src="../../assets/svg/city4.svg" alt="city">
      <div class="home__sea"></div>
      <img class="home__front"
       src="../../assets/svg/front_bank.svg" alt="bench and ground">
      <div class="home__down-arrow">
        <a href="#underground" aria-label="Continue">
          <span></span>
        </a>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>
