<script setup>
import { RadarSpinner } from 'epic-spinners';
</script>

<template>
  <RadarSpinner class="spinner" :animation-duration="2000" :size="80" color="#ff1d5e" />s
</template>

<style>
.spinner {
  z-index: 10;
}
</style>
