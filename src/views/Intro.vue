<script setup>
import Loading from './Loading.vue';
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import { setVh } from '../utils/setVh';
import { useCharacterStore } from '../stores/characterStore';

const chars = useCharacterStore();
const char = computed(() => chars.currentCharacter);

const getUrl = (url) => {
  const srcIndex = url.indexOf('/static');
  const srcPath = url.substring(srcIndex);
  return srcPath;
};

const IntroImageUrl = computed(() => getUrl(char.value.intro[0].src));
const isLoading = ref(true);
const typedText = ref('');
let timer;
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
  }, 100); // Adjust the speed as needed
};
const handleNext = () => {
  chars.setCharacterIndex((chars.selectCharacterIndex + 1) % chars.characters.length);

  console.log(char);
};

const handlePrev = () => {
  chars.setCharacterIndex(
    (chars.selectCharacterIndex - 1 + chars.characters.length) % chars.characters.length,
  );

  console.log(char);
};

onMounted(() => {
  setVh();
  timer = setTimeout(() => {
    isLoading.value = false;
    startTyping(char.value.intro[0].text); // Ensure startTyping is called after loading is complete
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            data-v-428bce3f=""
          >
            <g filter="url(#filter0_d_541_79)" data-v-428bce3f="">
              <circle cx="26" cy="22" r="21" fill="white" data-v-428bce3f=""></circle>
              <circle cx="26" cy="22" r="21.5" stroke="#F8F9FA" data-v-428bce3f=""></circle>
            </g>
            <mask
              id="mask0_541_79"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="14"
              y="10"
              width="24"
              height="24"
              data-v-428bce3f=""
            >
              <rect
                x="14.5"
                y="10.5"
                width="23"
                height="23"
                fill="#D50F4A"
                stroke="#D50F4A"
                data-v-428bce3f=""
              ></rect>
            </mask>
            <g mask="url(#mask0_541_79)" data-v-428bce3f="">
              <path
                d="M23.1965 21.6464L22.8429 22L23.1965 22.3535L30.5465 29.7035C30.7062 29.8632 30.7674 30.025 30.7627 30.2125C30.7577 30.4093 30.6868 30.5811 30.5215 30.7464C30.3589 30.909 30.1921 30.975 30 30.975C29.808 30.975 29.6411 30.909 29.4786 30.7464L29.478 30.7459L21.7786 23.0714C21.7785 23.0714 21.7785 23.0713 21.7784 23.0713C21.6239 22.9167 21.5128 22.7482 21.4393 22.5643C21.361 22.3688 21.325 22.1816 21.325 22C21.325 21.8184 21.361 21.6312 21.4393 21.4357C21.5128 21.2517 21.624 21.0831 21.7786 20.9285L29.4786 13.2285C29.6356 13.0715 29.8007 13.0075 30.0003 13.0123C30.2088 13.0174 30.3838 13.0909 30.5465 13.2535C30.709 13.4161 30.775 13.5829 30.775 13.775C30.775 13.967 30.709 14.1339 30.5465 14.2964L23.1965 21.6464Z"
                fill="#D50F4A"
                stroke="#D50F4A"
                data-v-428bce3f=""
              ></path>
            </g>
            <defs data-v-428bce3f="">
              <filter
                id="filter0_d_541_79"
                x="0"
                y="0"
                width="52"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
                data-v-428bce3f=""
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" data-v-428bce3f=""></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                  data-v-428bce3f=""
                ></feColorMatrix>
                <feOffset dy="4" data-v-428bce3f=""></feOffset>
                <feGaussianBlur stdDeviation="2" data-v-428bce3f=""></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out" data-v-428bce3f=""></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  data-v-428bce3f=""
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_541_79"
                  data-v-428bce3f=""
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_541_79"
                  result="shape"
                  data-v-428bce3f=""
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </button>
        <img class="char" :src="`${IntroImageUrl}`" />
        <button @click="handleNext" class="char-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            data-v-428bce3f=""
          >
            <g filter="url(#filter0_d_541_84)" data-v-428bce3f="">
              <circle cx="26" cy="22" r="21" fill="white" data-v-428bce3f=""></circle>
              <circle cx="26" cy="22" r="21.5" stroke="#F8F9FA" data-v-428bce3f=""></circle>
            </g>
            <mask
              id="mask0_541_84"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="15"
              y="10"
              width="24"
              height="24"
              data-v-428bce3f=""
            >
              <rect
                x="15.5"
                y="10.5"
                width="23"
                height="23"
                fill="#D50F4A"
                stroke="#D50F4A"
                data-v-428bce3f=""
              ></rect>
            </mask>
            <g mask="url(#mask0_541_84)" data-v-428bce3f="">
              <path
                d="M29.8285 22.3536L30.1821 22L29.8285 21.6464L22.4785 14.2964C22.3215 14.1394 22.2575 13.9743 22.2623 13.7747C22.2674 13.5662 22.3409 13.3912 22.5035 13.2286C22.6634 13.0687 22.8335 13 23.0375 13C23.2414 13 23.4114 13.0686 23.5712 13.2283C23.5713 13.2284 23.5714 13.2285 23.5714 13.2286L31.2459 20.928L31.2464 20.9286C31.401 21.0831 31.5122 21.2517 31.5858 21.4357C31.664 21.6312 31.7 21.8184 31.7 22C31.7 22.1816 31.664 22.3688 31.5858 22.5643C31.5122 22.7483 31.401 22.9169 31.2464 23.0714L23.5464 30.7714C23.3867 30.9311 23.2249 30.9923 23.0375 30.9877C22.8407 30.9827 22.6689 30.9118 22.5035 30.7464C22.3437 30.5866 22.275 30.4165 22.275 30.2125C22.275 30.0085 22.3437 29.8384 22.5035 29.6786L29.8285 22.3536Z"
                fill="#D50F4A"
                stroke="#D50F4A"
                data-v-428bce3f=""
              ></path>
            </g>
            <defs data-v-428bce3f="">
              <filter
                id="filter0_d_541_84"
                x="0"
                y="0"
                width="52"
                height="52"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
                data-v-428bce3f=""
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" data-v-428bce3f=""></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                  data-v-428bce3f=""
                ></feColorMatrix>
                <feOffset dy="4" data-v-428bce3f=""></feOffset>
                <feGaussianBlur stdDeviation="2" data-v-428bce3f=""></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out" data-v-428bce3f=""></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  data-v-428bce3f=""
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_541_84"
                  data-v-428bce3f=""
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_541_84"
                  result="shape"
                  data-v-428bce3f=""
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
    <div class="text-container">
      <p v-html="typedText"></p>
    </div>
    <div class="button-container">
      <button>선택하기</button>
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
  border: 3px var(--color-red) dashed;
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
