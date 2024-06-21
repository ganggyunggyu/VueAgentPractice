<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import { getUrl } from '@/shared/lib/getUrl';
import { setVh } from '@/shared/lib/setVh';

const chars = useCharacterStore();
const char = computed(() => chars.currentCharacter);

const TEXT = '자, 다음은 어디로 갈래? 원하는 곳을 누르면 위치를 알려줄게.';

const typedText = ref('');
let typingTimer;

const startTyping = (text) => {
  clearInterval(typingTimer);
  typedText.value = '';
  let index = 0;

  typingTimer = setInterval(() => {
    if (index < text.length) {
      typedText.value += text[index];
      index++;
      if (text[index - 1] === '?') {
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
    <img :src="`${getUrl(char.normal)}`" alt="" />
    <p v-html="typedText"></p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  border: 2px var(--color-red) dashed;
  border-radius: 20px;
  padding: 10px;
  width: 90vw;
  height: calc(10 * var(--vh));
  background: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
img {
  position: absolute;
  top: -40px;
  right: 0px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid var(--color-red);
  background-color: white;
}
p {
  line-height: 25px;
}
</style>
