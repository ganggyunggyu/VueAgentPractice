<template>
  <div>
    <img class="landing-img" src="/static/resource/landing/landing_01_01.jpg" alt="" />
    <div class="button-container">
      <button @click="this.$router.replace('intro')">신비의숲 시작하기</button>
      <img src="https://moundxr.com/assets/tap-a9529b41.png" alt="" />
    </div>
    <img class="landing-img" src="/static/resource/landing/landing_01_02.jpg" alt="" />
    <img class="landing-img" src="/static/resource/landing/landing_02.jpg" alt="" />
    <div class="button-container">
      <button @click="this.$router.replace('intro')">신비의숲 시작하기</button>
    </div>
    <img class="landing-img" src="/static/resource/landing/web-landing-page-3.jpg" alt="" />
  </div>
</template>

<script>
import { onMounted } from 'vue';

export const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', function () {
  setVh();
});

export default {
  name: 'Landing',
  setup() {
    setVh();
  },
};
onMounted(() => {
  setVh();
});
</script>

<style scoped>
.landing-img {
  width: 100vw;
  height: 100%;
}
.button-container button {
  width: 80vw;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--color-red);
  color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
}
.button-container img {
  width: 50px;
  height: 50px;
  position: absolute;
  right: calc(7 * var(--vh));
  bottom: calc(-1 * var(--vh));
  animation: scale-animation infinite 1s;
}
.button-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--color-landing-pink);
  z-index: 10;
  padding: 15px 0;
  position: relative;
}
button:hover {
  scale: 1.1;
}
button:active {
  scale: 1.2;
}
@keyframes scale-animation {
  0% {
    scale: 0.9;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 0.9;
  }
}
</style>
