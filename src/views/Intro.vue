<script setup>
import PrevButton from '../shared/ui/PrevButton.vue';
import NextButton from '../shared/ui/NextButton.vue';
import Loading from './Loading.vue';
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import { useCharacterStore } from '../stores/characterStore';
import { setVh } from '../shared/lib/setVh';
import { getUrl } from '../shared/lib/getUrl';

const chars = useCharacterStore();
const char = computed(() => chars.currentCharacter);

const IntroImageUrl = computed(() => getUrl(char.value.intro[0].src));
const isLoading = ref(true);
let timer;

const handleNext = () => {
  chars.setCharacterIndex((chars.selectCharacterIndex + 1) % chars.characters.length);
};

const handlePrev = () => {
  chars.setCharacterIndex(
    (chars.selectCharacterIndex - 1 + chars.characters.length) % chars.characters.length,
  );
};

const typedText = ref('');
let typingTimer;

watch(
  () => char.value.intro[0].text,
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
        typedText.value += '<br>';
      }
    } else {
      clearInterval(typingTimer);
    }
  }, 100);
};

onMounted(() => {
  setVh();
  timer = setTimeout(() => {
    isLoading.value = false;
    startTyping(char.value.intro[0].text);
  }, 1000);
});

onUnmounted(() => {
  clearTimeout(timer);
  clearInterval(typingTimer);
});
</script>

<template>
  <Loading v-if="isLoading" />
  <div class="intro-container" v-if="!isLoading">
    <img class="logo" src="/static/resource/common/AR_Logo_02.png" alt="" />
    <div class="char-container">
      <p class="char-name">{{ char.name }}</p>
      <div class="char-image-container">
        <button @click="handlePrev" class="char-button">
          <PrevButton />
        </button>
        <img class="char" :src="`${IntroImageUrl}`" />
        <button @click="handleNext" class="char-button">
          <NextButton />
        </button>
      </div>
    </div>
    <div class="text-container">
      <p v-html="typedText"></p>
    </div>
    <div class="button-container">
      <button @click="this.$router.replace('stage')">선택하기</button>
      <img src="https://moundxr.com/assets/tap-a9529b41.png" alt="" />
    </div>
  </div>

  <img class="bg" src="/static/resource/common/bg.png" alt="" />
</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100 * var(--vh));
  z-index: 10;
  overflow: hidden;
}
.logo {
  height: calc(20 * var(--vh));
  width: 90%;
}
.char-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.char-button {
  animation: scale-animation infinite 1s;
  transition: scale 0.3s;
}
.char-button:hover {
  scale: 1.1;
}
.char-button:active {
  scale: 1.2;
}
.char {
  height: calc(45 * var(--vh));
  width: 70vw;
}
.text-container {
  border: 2px var(--color-red) dashed;
  border-radius: 20px;
  padding: 10px;
  width: 80vw;
  height: calc(20 * var(--vh));
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.button-container button {
  width: 80vw;
  padding: 20px 0;
  border-radius: 20px;
  background-color: var(--color-red);
  color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
  height: auto;
}
.button-container img {
  width: 50px;
  height: 50px;
  position: absolute;
  right: calc(7 * var(--vh));
  bottom: calc(-1 * var(--vh));
  animation: scale-animation infinite 1s;
}
.button-container {
  width: 100vw;
  display: flex;
  justify-content: center;

  z-index: 10;
  padding: 15px 0;
  position: relative;
}
button:hover {
  scale: 1.1;
}
button:active {
  scale: 1.2;
}

.chars-container {
  display: flex;
  flex-direction: column;
}

.char-name {
  font-size: 18px;
  color: var(--color-red);
}

.char-image-container {
  display: flex;
}

.text-container p {
  text-align: center;
  line-height: 30px;
}
@keyframes scale-animation {
  0% {
    scale: 0.9;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 0.9;
  }
}
</style>
