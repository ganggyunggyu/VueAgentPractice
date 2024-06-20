<script setup>
import { defineProps, ref } from 'vue';
import { getUrl } from '@/shared/lib/getUrl';

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
    <div class="main-title">
      <p class="main-main-title">{{ title1 }}</p>
      <p class="main-sub-title">{{ title2 }}</p>
    </div>
    <div class="sub-title">{{ title3 }}</div>
  </article>
</template>

<style scoped>
article{
  background-color: white;
  gap: 10px;
  display: flex;
  align-items: center;
  width: 90vw;
  padding: 10px;
  border: 2px solid var(--color-red);
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

}
img{
  height: 60px;
  width: 60px;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--color-landing-pink);
}
.main-title{
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
}
.main-main-title {
  color: var(--color-red);
  font-weight: 800;
  font-size: 16px;
}
.main-sub-title{
  font-size: 12px;
}
.sub-title{
  font-size: 12px;
  color: grey;
}
</style>
