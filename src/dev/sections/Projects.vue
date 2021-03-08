<template>
  <section class="projects space_sections" id="projects">
    <img
      class="projects__stars projects__stars--left stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
      data-aos="stars"
      data-aos-once="true"
      data-aos-duration="5000"
    />
    <div class="projects__title">Projects</div>
    <img
      class="projects__stars projects__stars--right stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
      data-aos="stars"
      data-aos-once="true"
      data-aos-duration="5000"
    />
    <img
      id="project_comet"
      class="comet"
      data-aos="fade-down-left"
      data-aos-delay="300"
      data-aos-once="true"
      data-aos-duration="2000"
      src="../../assets/materials/projects/comet.svg"
      alt="comet"
    />
    <div
      id="about_me_text"
      class="projects__projectsWrapper"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <p class="projects__tempText">
        Currently under construction but you can visit my GitHub page for my
        projects, or see my pens on codepen.io :)
      </p>
      <div class="projects__links">
        <a
          class="contact__icon"
          target="_blank"
          href="https://github.com/edenizk"
          aria-label="link to my github"
        >
          <img src="../../assets/materials/contacts/github.svg" alt="Github" />
        </a>
        <a
          class="contact__icon"
          target="_blank"
          href="https://codepen.io/collection/APzyGM"
          aria-label="link to my codepen"
        >
          <img
            src="../../assets/materials/contacts/codepen.svg"
            alt="Codepen"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
};
</script>
