<script setup>
import { RadarSpinner } from 'epic-spinners';
</script>

<template>
  <div>
    <RadarSpinner class="spinner" :animation-duration="2000" :size="80" color="#ff1d5e" />
    <img src="/static//resource/common/bg.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
img {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.spinner {
  z-index: 10;
}
</style>
