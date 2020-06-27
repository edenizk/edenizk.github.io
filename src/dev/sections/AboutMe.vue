<template>
  <section id="about_me" class="about-me space_sections">
    <img
      class="about-me__stars about-me__stars--left stars"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      src="../../assets/materials/about_me/left_side.svg"
      alt="stars"
    />
    <img
        class="about-me__comet"
        data-aos="fade-down-left"
        data-aos-delay="300"
        data-aos-duration="2000"
        src="../../assets/materials/projects/comet.svg"
        alt="comet" />
    <div class="about-me__title">About Me</div>
    <div class="about-me__text"
    data-aos="fade-up"
    data-aos-duration="2000"
    >
      My name is Ergin Deniz Kösecioğlu,
      <br />but...
      <br />You can call me
      <span style="color: #0BFFFF">Deniz</span> :).
      <br />I am an IT student who is a tireless
      seeker of knowledge and looking for new challenges in programming.
      also trying to learn how to make good design.
      <br />
      <br />I am also an animal lover, enjoy playing ukulele
      and like to make 2D/3D art in free time.
    </div>
    <img
      class="about-me__stars about-me__stars--right stars"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      src="../../assets/materials/about_me/rightside_stars.svg"
      alt="stars"
    />
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>
