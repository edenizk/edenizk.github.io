<template>
  <section class="space_sections contact" id="contact">
    <img
      class="contact__stars stars"
      style="top: 5vh; right: 5vh; transform: rotate(180deg)"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="decorative star cluster"
    />
    <img
      class="contact__stars stars"
      style="left: 0vh; bottom: 0"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="decorative star cluster"
    />
    <div
      id="contact_text"
      class="contact__text"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <h2 id="title_contact" class="contact__title">
        You Have
        <br />A Cool Project? <br />Just Contact Me 😁
      </h2>
      <br />
      <a href="mailto:e.deniz.kos@gmail.com" id="my_email" class="contact__email">
        e.deniz.kos@gmail.com
      </a>
      <div id="contact_icons" class="contact__icons">
        <a class="contact__icon" target="_blank" href="https://github.com/edenizk" aria-label="Visit my GitHub profile">
          <img src="../../assets/materials/contacts/git.svg" alt="GitHub" />
        </a>
        <a class="contact__icon" target="_blank" href="https://www.linkedin.com/in/edkos/" aria-label="Visit my LinkedIn profile">
          <img src="../../assets/materials/contacts/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
    <img
      id="contact_moon"
      class="contact__moon"
      src="../../assets/materials/contacts/moon.svg"
      alt="decorative moon"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    />
  </section>
</template>
