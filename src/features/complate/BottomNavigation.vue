<script setup>
  import router from '@/router/index';
  import PrevButtonRed2 from '@/shared/ui/PrevButtonRed2.vue';
  import Save from '@/shared/ui/Save.vue';
  import Share from '@/shared/ui/Share.vue';
  import { useImageDataStore } from '@/stores/imageData';
  import { blobDownload } from '@/shared/lib/blob';
  const imageStore = useImageDataStore();

  const handleSave = () => {
    const imageData = imageStore.getImageData();
    blobDownload(imageData);
  };

  const handleShare = () => {};

  const handlePrev = () => {
    router.replace('busan');
  };
</script>

<template>
  <section>
    <button @click="handlePrev">
      <PrevButtonRed2 />
      <span>뒤로</span>
    </button>
    <button @click="handleSave"><Save /> <span>저장</span></button>
    <button class="scale-animation"><Share /> <span>공유</span></button>
  </section>
</template>

<style scoped>
  section {
    position: fixed;
    bottom: 0;
    left: 0;
    height: calc(15 * var(--vh));
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  button span {
    color: var(--color-red);
    font-weight: 800;
  }
  button svg {
    height: 40%;
    width: 40%;
  }
  .scale-animation {
    animation-name: scale;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
</style>
