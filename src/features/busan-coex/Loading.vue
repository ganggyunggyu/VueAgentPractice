<template>
  <div v-if="showLoading" class="loading-container">
    <div>
      <p><span>더플래쉬</span>와 함께<br />컬쳐버스로 <span>GoGo!</span></p>
    </div>
    <progress class="loading-bar" value="0" max="100"></progress>

    <p>AR 준비중...</p>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
const showLoading = ref(true);
const intervalId = ref(null);
export default {
  setup() {
    onMounted(() => {
      setTimeout(() => {
        showLoading.value = false;
      }, 1000);
      const progressEl = document.querySelector(".loading-bar");
      if (progressEl) {
        intervalId.value = setInterval(() => {
          progressEl.value = progressEl.value + 1;
          if (progressEl.value >= 100) {
            clearInterval(intervalId.value);
          }
        }, 10);
      }
    });

    onUnmounted(() => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
    });

    return {
      showLoading,
    };
  },
};
</script>

<style scoped>
.loading-container {
  width: 100vw;
  height: 100vh;
  background: greenyellow;
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
