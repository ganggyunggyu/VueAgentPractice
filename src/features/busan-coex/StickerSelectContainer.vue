<script setup>
  import BottomArrow from '@/shared/ui/BottomArrow.vue';
  import { STICKERS } from '../constant/URL';
  import useExperience from '../capture/hooks/useExperience';
  import { ref } from 'vue';
  const emits = defineEmits(['update:isStickerListView']);
  const props = defineProps({
    isStickerListView: Boolean,
  });

  const selected = ref(null);

  const { setSticker } = useExperience();
  const handleCloseList = () => {
    emits('update:isStickerListView', !props.isStickerListView);
  };

  const handleClick = (image, i) => {
    setSticker(image);
    selected.value = image.id;
  };
</script>

<template>
  <section style="overflow-x: scroll" class="scroll">
    <article @click="handleCloseList"><BottomArrow /></article>
    <article
      @click="handleClick(sticker, index)"
      v-for="(sticker, index) in STICKERS"
      :class="selected === index ? 'selected' : ''"
    >
      <img :src="`${sticker.src}`" alt="" />
    </article>
  </section>
</template>

<style scoped>
  section {
    position: fixed;
    bottom: calc(20 * var(--vh));
    z-index: 999;
    min-width: 100%;
    padding: 0 10px;
    display: flex;
    gap: 10px;
    overflow: scroll;
    width: 100%;
  }
  article {
    height: calc(10 * var(--vh));
    min-width: calc(10 * var(--vh));
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
  }
  .selected {
    filter: grayscale(100%);
  }
  img {
    width: 90%;
  }
</style>
