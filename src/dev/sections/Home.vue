<template>
    <section class="home" id="home">
      <div class="home__title">Ergin Deniz
        <br/>Kosecioglu<br/>
        <span>- an IT guy -</span>
      </div>
      <img class="home__sun" src="../../assets/svg/sun.svg" alt="sun">
      <img class="home__city" src="../../assets/svg/city4.svg" alt="city">
      <div class="home__sea"></div>
      <img class="home__front" src="../../assets/svg/front_bank.svg" alt="bench and ground">
      <div class="home__down-arrow">
        <a href="#main_underground" aria-label="Continue">
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
