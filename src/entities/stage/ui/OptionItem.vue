<script setup>
import { defineProps, ref } from 'vue';
import { getUrl } from '../../../shared/lib/getUrl';

const props = defineProps({
  icon: {
    type: String,
  },
  title1: {
    type: String,
  },
  title2: {
    type: String,
  },
  title3: {
    type: String,
  },
});
</script>

<template>
  <article class="option">
    <img :src="`${getUrl(icon)}`" alt="" />
    <div>
      <p>{{ title1 }}</p>
      <p>{{ title2 }}</p>
    </div>
    <div>{{ title3 }}</div>
  </article>
</template>

<style scoped></style>
