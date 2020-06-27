<template>
  <section class="undergrd">
    <img class="undergrd__image"
    src="../../assets/svg/earth_with_pipes.svg"
    alt="earth with pipes" />
    <div class="undergrd__main" id="underground">
      <div class="undergrd__text" data-aos="flip-up" data-aos-duration="2000">
        <h2>
          Thank You For Visiting My
          <br />
          <span>Portfolio.</span>
        </h2>
      </div>
      <a class="undergrd__chest"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        href="https://youtu.be/sIhYExeApXE"
        target="_blank"
        src="../../assets/svg/chest_idle.svg">
          <span class="undergrd__chestText">Hi, wanna see my video? 😊</span>
        </a>
      <img
        class="undergrd__stone"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        src="../../assets/svg/stone.svg"
        alt="stones"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Underground',
};
</script>
