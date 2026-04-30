<template>
  <section class="projects space_sections" id="projects">
    <img
      class="projects__stars projects__stars--left stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="decorative star cluster"
      data-aos="stars"
      data-aos-once="true"
      data-aos-duration="5000"
    />
    <h2 class="projects__title">Projects</h2>
    <img
      class="projects__stars projects__stars--right stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="decorative star cluster"
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
      alt="decorative comet"
    />
    <div
      class="projects__cards"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <article class="projects__card">
        <h3 class="projects__card-title">grapesjs-google-material-icons</h3>
        <p class="projects__card-desc">A GrapesJS plugin that lets you search and insert Google Material Icons as blocks directly inside the editor.</p>
        <div class="projects__card-tags">
          <span class="projects__tag">TypeScript</span>
          <span class="projects__tag">GrapesJS</span>
        </div>
        <div class="projects__card-footer">
          <span class="projects__stars-count">⭐ 3</span>
          <a
            class="projects__card-link"
            href="https://github.com/edenizk/grapesjs-google-material-icons"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View grapesjs-google-material-icons on GitHub"
          >View on GitHub →</a>
        </div>
      </article>

      <article class="projects__card">
        <h3 class="projects__card-title">udemyRemainingTimerExtention</h3>
        <p class="projects__card-desc">A browser extension that calculates and displays the total remaining watch time for a Udemy course at a glance.</p>
        <div class="projects__card-tags">
          <span class="projects__tag">JavaScript</span>
          <span class="projects__tag">Browser Extension</span>
        </div>
        <div class="projects__card-footer">
          <span class="projects__stars-count">⭐ 17</span>
          <a
            class="projects__card-link"
            href="https://github.com/edenizk/udemyRemainingTimerExtention"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View udemyRemainingTimerExtention on GitHub"
          >View on GitHub →</a>
        </div>
      </article>
    </div>
  </section>
</template>
