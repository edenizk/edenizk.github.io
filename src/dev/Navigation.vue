// eslint-disable-next-line editor.codeActionsOnSave
<template>
  <div class="nav">
    <a class="nav__link" href="#intro">
      <img class="nav__icon" id="home_icon" src="../assets/svg/home.svg" alt="home" />
      <span class="nav__text">Home</span>
    </a>
    <a class="nav__link" href="#skills_and_certifications">
      <img
        class="nav__icon"
        id="qualifications_icon"
        src="../assets/svg/qualifications_icon.svg"
        alt="Qualifications"
      />
      <span class="nav__text">Qualifications</span>
    </a>
    <a class="nav__link" href="#about_me">
      <img class="nav__icon" id="me_icon" src="../assets/svg/me.svg" alt="about me" />
      <span class="nav__text">About Me</span>
    </a>
    <a class="nav__link" href="#projects">
      <img class="nav__icon" id="project_icon" src="../assets/svg/projects.svg" alt="my projects" />
      <span class="nav__text">Projects</span>
    </a>
    <a class="nav__link" href="#contact">
      <img class="nav__icon" id="contact_icon" src="../assets/svg/contact.svg" alt="contacts" />
      <span class="nav__text">Contact</span>
    </a>
    <!-- <a class="nav_link" href="sitemap.xml">sitemap</a> -->
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>
