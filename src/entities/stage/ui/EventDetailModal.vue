<script setup>
import { getUrl } from '@/shared/lib/getUrl';
import { setVh } from '@/shared/lib/setVh';
import { onMounted } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  isModal: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['update:isModal']);

const closeModal = () => {
  emit('update:isModal', false);
};

onMounted(() => {
  setVh();
});
</script>

<template>
  <section>
    <button class="close-button" @click="closeModal">❌</button>
    <article class="top-container">
      <img
        width="70px"
        height="70px"
        loading="lazy"
        class="icon"
        :src="`${getUrl(props.event.icon)}`"
        alt=""
      />
      <div class="title-container">
        <p class="content1">{{ props.event.content1 }}</p>
        <p class="content2">{{ props.event.content2 }}</p>
        <p class="content3">{{ props.event.content3 }}</p>
      </div>
    </article>
    <article class="bottom-container">
      <img class="logo" src="../../../../static/resource/common/event_logo.png" alt="logo-image" />
      <img
        width="250px"
        height="250px"
        loading="lazy"
        class="reward"
        :src="`${getUrl(props.event.src)}`"
        alt="reeward-image"
      />
      <p>{{ props.event.content4 }}</p>
      <p>{{ props.event.content5 }}</p>
    </article>
  </section>
</template>

<style scoped>
section {
  width: 90%;
  height: calc(75 * var(--vh));
  background-color: white;
  z-index: 999;
  position: fixed;
  top: calc(14 * var(--vh));
  border-radius: 16px;
  border: 2px solid var(--color-red);
  padding: 20px;
  display: flex;
}
.top-container {
  display: flex;
  gap: 40px;
  padding: 20px 0;
}
.bottom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  padding: 20px;
  border-radius: 16px;
}

.icon {
  padding: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--color-landing-pink);
}
.logo {
  width: 80%;
}
.reward {
  width: 80%;
}
.title-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.content1 {
  color: var(--color-red);
  font-size: 20px;
  font-weight: 800;
}
.content2 {
  color: grey;
}
.content3 {
  font-size: 18px;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 5px;
  transition: all 0.3s;
}
.close-button:hover {
  scale: 1.2;
  background: #eee;
  border-radius: 16px;
}
.close-button:active {
  scale: 1.2;
  background: #eee;
  border-radius: 16px;
}
</style>
