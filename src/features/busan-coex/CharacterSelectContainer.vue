<script setup>
  import BottomArrow from '@/shared/ui/BottomArrow.vue';
  import { CHARACTERS } from '../constant/constant';
  import useExperience from '../capture/hooks/useExperience';
  import { ref, onMounted } from 'vue';
  const emits = defineEmits(['update:isCharacterListView']);
  const props = defineProps({
    isCharacterListView: Boolean,
  });

  const { setCharacter } = useExperience();
  const selected = ref(null);
  const handleCloseList = () => {
    emits('update:isCharacterListView', !props.isCharacterListView);
  };

  const handleClick = (image) => {
    setCharacter(image);
    selected.value = image.id;
  };
  selected.value = 0;
</script>

<template>
  <section>
    <article @click="handleCloseList"><BottomArrow /></article>
    <article
      @click="handleClick(char)"
      v-for="(char, index) in CHARACTERS"
      :class="selected === index ? 'selected' : ''"
    >
      <img :src="`${char.src}`" alt="" />
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
    overflow-x: scroll;
  }
  article {
    height: calc(10 * var(--vh));
    width: calc(10 * var(--vh));
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
  }
  article:active {
    filter: grayscale(100%);
  }
  article:hover {
    filter: grayscale(100%);
  }
  .selected {
    filter: grayscale(100%);
  }
  img {
    width: 90%;
  }
</style>
