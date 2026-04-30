<template>
  <section id="skills_and_certifications" class="skill-certificate" ref="sectionEl">
    <div class="skill-certificate__inner">

      <!-- left: title + zone nav -->
      <div class="skill-certificate__nav">
        <div class="skill-certificate__text">Skills</div>
        <ul class="skill-certificate__zone-list">
          <li
            v-for="(zone, index) in zones"
            :key="zone.label"
            class="skill-certificate__zone-item"
            :class="{ 'skill-certificate__zone-item--active': activeZone === index }"
          >
            {{ zone.icon }} {{ zone.label }}
          </li>
        </ul>
      </div>

      <!-- right: absolute-stacked zone boxes -->
      <div class="skill-certificate__panels">
        <transition-group name="panel">
          <div
            v-for="(zone, index) in zones"
            v-if="activeZone === index"
            :key="zone.label"
            class="skill-certificate__panel"
          >
            <div
              v-for="(skill, si) in zone.skills"
              :key="skill.name"
              class="skill-certificate__skills"
              data-aos="fade-up"
              data-aos-once="false"
              :data-aos-delay="si * 80"
            >
              <div class="coin_text">{{ skill.name }}</div>
              <div v-for="n in skill.coins" :key="n" class="coin"></div>
            </div>
          </div>
        </transition-group>
      </div>

    </div>
    <img
      id="green_pipe"
      class="skill-certificate__pipe"
      src="../../assets/materials/skills_certificates/green_pipe.svg"
      alt="green pipe"
    />
    <img
      class="skill-certificate__stone"
      src="../../assets/svg/stone.svg"
      alt="stones"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sectionEl = ref(null)
const activeZone = ref(0)

const zones = [
  {
    icon: '⚡',
    label: 'Frontend',
    skills: [
      { name: 'HTML / CSS', coins: 4 },
      { name: 'JavaScript', coins: 4 },
      { name: 'TypeScript', coins: 3 },
      { name: 'React / Next.js', coins: 4 },
      { name: 'Vue / Nuxt.js', coins: 3 },
    ],
  },
  {
    icon: '🛠',
    label: 'Backend & Tools',
    skills: [
      { name: 'Node.js', coins: 3 },
      { name: 'Python', coins: 2 },
      { name: 'PHP', coins: 3 },
      { name: 'Kotlin', coins: 2 },
      { name: 'Docker', coins: 2 },
      { name: 'PostgreSQL', coins: 2 },
    ],
  },
  {
    icon: '🎨',
    label: 'Craft & Workflow',
    skills: [
      { name: 'GrapesJS', coins: 4 },
      { name: 'Figma', coins: 3 },
      { name: 'Jest', coins: 3 },
      { name: 'Webpack / Vite', coins: 3 },
      { name: 'Git', coins: 4 },
    ],
  },
]

function onScroll() {
  if (!sectionEl.value) return
  const { top, height } = sectionEl.value.getBoundingClientRect()
  // progress 0→1 as section scrolls through viewport
  const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))
  const index = Math.min(zones.length - 1, Math.floor(progress * zones.length))
  activeZone.value = index
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
