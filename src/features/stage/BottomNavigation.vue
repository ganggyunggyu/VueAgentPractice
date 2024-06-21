<script setup>
import BottomNavigationItem from '@/entities/stage/ui/BottomNavigationItem.vue';
import Home from '@/shared/ui/Home.vue';
</script>

<template>
  <nav class="bottom-nav">
    <BottomNavigationItem
      @click="redirectNomalStorage"
      icon="../../../../static/resource/reward/reward_active.png"
      lable="일반 보상"
    />
    <button @click="this.$router.replace('stage')">
      <Home class="home-icon" />
    </button>
    <BottomNavigationItem
      @click="redirectPrimiumStorage"
      icon="../../../../static/resource/reward/premium_active.png"
      lable="프리미엄 보상"
    />
  </nav>
</template>

<script>
import { playAudio } from '@/shared/lib/audio';
export default {
  name: 'BottomNavigation',

  methods: {
    redirectNomalStorage() {
      this.$router.replace('normal-storage');
      playAudio();
    },
    redirectPrimiumStorage() {
      this.$router.replace('primium-storage');
      playAudio();
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  background-color: var(--color-red);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px;
}
button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  padding: 10px;
  border: 3px solid var(--color-red);
  transform: translateY(-25px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.home-icon {
  width: 90%;
  height: 90%;
}
</style>
