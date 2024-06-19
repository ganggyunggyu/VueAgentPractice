<script setup>
import { computed, defineProps, onMounted, onUnmounted, ref, watch } from 'vue';
import { useCharacterStore } from '../../stores/characterStore';
import { getUrl } from '../../shared/lib/getUrl';
import { setVh } from '../../shared/lib/setVh';
const chars = useCharacterStore();
const char = computed(() => chars.currentCharacter);

const TEXT = '자, 다음은 어디로 갈래? 원하는 곳을 누르면 위치를 알려줄게.';

// const props = defineProps({
//   text: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
// });

const typedText = ref('');
let typingTimer;

watch(
  () => 'sadasdasdadasdasd.asdsadas',
  (newText) => {
    startTyping(newText);
  },
);
const startTyping = (text) => {
  clearInterval(typingTimer);
  typedText.value = '';
  let index = 0;

  typingTimer = setInterval(() => {
    if (index < text.length) {
      typedText.value += text[index];
      index++;
      if (text[index - 1] === '.') {
        typedText.value += '<br />';
      }
    } else {
      clearInterval(typingTimer);
    }
  }, 100);
};

onMounted(() => {
  startTyping(TEXT);
  setVh();
});

onUnmounted(() => {
  clearInterval(typingTimer);
});
</script>

<template>
  <section>
    <img :src="`${getUrl(char.maker)}`" alt="" />
    <p v-html="typedText"></p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  border: 3px var(--color-red) dashed;
  border-radius: 20px;
  padding: 10px;
  width: 80vw;
  height: calc(30 * var(--vh));
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  position: relative;
}
img {
  position: absolute;
  top: 0;
  right: 0;
}
p {
  line-height: 25px;
}
</style>
