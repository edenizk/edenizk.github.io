<template>
  <section class="space_sections" id="contact">
    <img
      class="stars"
      style="top: 5vh; right: 5vh; transform: rotate(180deg);"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <img
      class="stars"
      style="left: 0vh; bottom: 0;"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <div id="contact_text"
        data-aos="fade-up"
        data-aos-duration="2000">
      <div id="title_contact">
        You Have
        <br />A Cool Project?
        <br />Just Contact Me :)
      </div>
      <br />
      <a href="mailto:ergindenizkosecioglu@gmail.com"
        id="my_email">
            ergindenizkosecioglu@gmail.com
       </a>
      <div id="contact_icons">
        <a
          class="contact_icon"
          target="_blank"
          href="https://github.com/edenizk"
          aria-label="link to my github"
        >
          <img src="../../assets/materials/contacts/git.svg" />
        </a>
        <a
          class="contact_icon"
          target="_blank"
          href="https://www.linkedin.com/in/edkos/"
          aria-label="link to my linkedin"
        >
          <img src="../../assets/materials/contacts/linkedin.svg" />
        </a>
        <a
          class="contact_icon"
          target="_blank"
          href="https://www.artstation.com/dkpixx"
          aria-label="link to my artstation"
        >
          <img src="../../assets/materials/contacts/artstation.svg" />
        </a>
      </div>
    </div>
    <img id="contact_moon"
        src="../../assets/materials/contacts/moon.svg"
        alt="moon"
        data-aos="fade-down"
        data-aos-duration="2000" />
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
