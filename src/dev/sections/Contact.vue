<template>
  <section class="space_sections contact" id="contact">
    <img
      class="contact__stars stars"
      style="top: 5vh; right: 5vh; transform: rotate(180deg)"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <img
      class="contact__stars stars"
      style="left: 0vh; bottom: 0"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <div
      id="contact_text"
      class="contact__text"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div id="title_contact" class="contact__title">
        You Have
        <br />A Cool Project? <br />Just Contact Me 😁
      </div>
      <br />
      <a
        href="mailto:ergindenizkosecioglu@gmail.com"
        id="my_email"
        class="contact__email"
      >
        ergindenizkosecioglu@gmail.com
      </a>
      <div id="contact_icons" class="contact__icons">
        <a
          class="contact__icon"
          target="_blank"
          href="https://github.com/edenizk"
          aria-label="link to my github"
        >
          <img src="../../assets/materials/contacts/git.svg" alt="github"/>
        </a>
        <a
          class="contact__icon"
          target="_blank"
          href="https://www.linkedin.com/in/edkos/"
          aria-label="link to my linkedin"
        >
          <img src="../../assets/materials/contacts/linkedin.svg" alt="linkedin"/>
        </a>
        <a
          class="contact__icon"
          target="_blank"
          href="https://www.artstation.com/dkpixx"
          aria-label="link to my artstation"
        >
          <img src="../../assets/materials/contacts/artstation.svg" alt="artstation" />
        </a>
      </div>
    </div>
    <img
      id="contact_moon"
      class="contact__moon"
      src="../../assets/materials/contacts/moon.svg"
      alt="moon"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    />
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
