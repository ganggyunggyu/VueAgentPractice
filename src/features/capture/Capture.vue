<script setup>
  import { onMounted, ref } from 'vue';
  import { setVh } from '@/shared/lib/setVh';

  const canvasRef = ref(null);
  const containerRef = ref(null);

  const props = defineProps({
    isTutorial: {
      type: Boolean,
    },
  });

  const emits = defineEmits(['initCanvas']);

  onMounted(() => {
    setVh();
  });
</script>

<template>
  <div ref="containerRef" id="webgl" class="webgl-container">
    <canvas ref="canvasRef" class="webgl"></canvas>
  </div>
  <div class="frame webgl-container">
    <img src="" alt="" />
  </div>
</template>

<style scoped>
  .webgl-container {
    position: relative;
    width: 100%;
    height: calc(75 * var(--vh));
  }
  .camera {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(75 * var(--vh));
    object-fit: fill;
  }
  .webgl {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(75 * var(--vh));
    z-index: 2;
  }
  .frame {
    position: absolute;
    top: calc(10 * var(--vh));
    width: 100%;
    height: calc(75 * var(--vh));
    display: none;
  }
  .frame img {
    width: 100%;
    height: 100%;
  }
</style>
