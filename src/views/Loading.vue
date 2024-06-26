<script setup>
  import Background from '../shared/ui/Background.vue';
  import Spinner from '../shared/ui/Spinner.vue';
</script>

<template>
  <div>
    <Spinner />
    <Background />
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
</style>
