<script setup>
  import { useImageDataStore } from '@/stores/imageData';
  import TopNavigation from '@/features/busan-coex/TopNavigation.vue';
  import BottomNavigation from '@/features/complate/BottomNavigation.vue';
  import router from '@/router/index';
  const imageStore = useImageDataStore();
  const imageData = imageStore.imageData;
</script>
<template>
  <TopNavigation />
  <div class="frame">
    <img :src="`${imageData}`" alt="" />
  </div>
  <BottomNavigation />
</template>
<style scoped>
  .frame {
    position: absolute;
    top: calc(10 * var(--vh));
    width: 100%;
    height: calc(75 * var(--vh));
  }
  .frame img {
    width: 100%;
    height: 100%;
  }
</style>
