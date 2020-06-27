<template>
  <div class="waves" :class="darkWaves ? 'waves--dark' : ''">
    <div class="waves__sea"></div>
    <svg
      class="waves__waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="waves__waveList">
        <use xlink:href="#gentle-wave" x="48" y="0" />
        <use xlink:href="#gentle-wave" x="48" y="3" />
        <use xlink:href="#gentle-wave" x="48" y="5" />
        <use xlink:href="#gentle-wave" x="48" y="7" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Wave',
  props: {
    darkWaves: Boolean,
  },
};
</script>

<style>
</style>
