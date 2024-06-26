<script setup>
  import Replace from '@/shared/ui/Replace.vue';
  import Close from '@/shared/ui/Close.vue';

  const handleSwitchCamera = () => {
    window.switchCamera();
  };
</script>

<template>
  <div class="top-button-container">
    <div class="empty-box"></div>
    <button @click="handleSwitchCamera" class="top-button">
      <Replace />
    </button>
    <button class="top-button">
      <Close />
    </button>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import { setVh } from '@/shared/lib/setVh';
  export default {
    setup() {
      onMounted(() => {
        setVh();
        window.addEventListener('resize', setVh);
      });
    },
  };
</script>

<style scoped>
  .top-button-container {
    width: 100%;
    height: calc(10 * var(--vh));
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .top-button svg {
    height: calc(5 * var(--vh));
    width: calc(5 * var(--vh));
  }

  .empty-box {
    height: calc(5 * var(--vh));
    width: calc(5 * var(--vh));
  }
</style>
