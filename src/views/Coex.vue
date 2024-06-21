<template>
    <div class="container" @click="navigateToBusan"></div>
  </template>
  
  <style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url("../../../static/resource/common/intro.jpg");
    background-size: cover;
    background-position: center center;
  }
  </style>
  
  <script>
  export default {
    methods: {
      navigateToBusan() {
        this.$router.replace("busan");
      },
    },
  };
  </script>
  