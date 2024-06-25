<script setup>
  import { onMounted } from 'vue';
  import { setVh } from '@/shared/lib/setVh';
  import User from '@/shared/ui/User.vue';
  import ThreeCircle from '@/shared/ui/ThreeCircle.vue';
  import Capture from '@/shared/ui/Capture.vue';

  const props = defineProps({
    isStickerListView: Boolean,
    isCharacterListView: Boolean,
  });

  const emit = defineEmits(['update:isStickerListView', 'update:isCharacterListView']);

  const handleCharacterList = () => {
    if (props.isStickerListView) emit('update:isStickerListView', false);
    emit('update:isCharacterListView', !props.isCharacterListView);
  };
  const handleStickerList = () => {
    if (props.isCharacterListView) emit('update:isCharacterListView', false);
    emit('update:isStickerListView', !props.isStickerListView);
  };
  const handleCapture = () => {
    window.captureImage();
  };
  onMounted(() => {
    setVh();
    window.addEventListener('resize', setVh);
  });
</script>

<template>
  <div class="bottom-button-container">
    <button @click="handleCharacterList" class="bottom-button">
      <User />
      <span>캐릭터</span>
    </button>
    <button @click="handleCapture" class="capture-button">
      <Capture />
    </button>
    <button @click="handleStickerList" class="bottom-button">
      <ThreeCircle />
      <span>스티커</span>
    </button>
  </div>
</template>

<style scoped>
  .bottom-button-container {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    height: calc(15 * var(--vh));
  }
  .bottom-button {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    color: #d50f4a;
    gap: 3px;
    font-weight: 800;
    font-style: 18px;
  }
  .bottom-button svg {
    height: calc(5 * var(--vh));
    width: auto;
  }
  .capture-button svg {
    height: calc(10.5 * var(--vh));
    width: auto;
  }
</style>
