<script setup>
import BottomButtonNav from '@/features/busan-coex/BottomButtonNav.vue';
import Tutorial from '@/features/busan-coex/Tutorial.vue';
import TopButtonNav from '@/features/busan-coex/TopButtonNav.vue';
import Loading from '@/features/busan-coex/Loading.vue';
import Capture from '../features/capture/Capture.vue';
</script>

<template>
  <Loading />
  <TopButtonNav />
  <Tutorial v-if="isTutorial" @click="isTutorial = false" />
  <Capture />
  <BottomButtonNav v-if="!isTutorial" />
</template>
<script>
import { onMounted, ref } from 'vue';
const isTutorial = ref(true);

export default {
  setup() {
    const setVH = () => {
      document.body.style.overflow = 'hidden';
      let vh = window.innerHeight * 0.01;
      console.log(window.innerHeight * 0.01);

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    const handleTutorial = () => {
      isTutorial = false;
      console.log(isTutorial);
    };
    onMounted(() => {
      setVH();
      window.addEventListener('resize', setVH);
    });
  },
};
</script>
<style scoped></style>
