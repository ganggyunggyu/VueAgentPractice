<script setup>
  import router from '@/router/index';

  const navigateToBusan = () => {
    router.replace('busan');
  };
</script>

<template>
  <div class="container" @click="navigateToBusan"></div>
  <canvas class="webgl"></canvas>
</template>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url('../../../static/resource/common/intro.jpg');
    background-size: cover;
    background-position: center center;
  }
</style>
