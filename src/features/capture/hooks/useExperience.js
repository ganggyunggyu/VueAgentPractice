import Experience from '@/ar/capture/Experience';
import router from '@/router/index';
import { useImageDataStore } from '@/stores/imageData';
import { ref, onMounted, onUnmounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const useExperience = () => {
  let experience;

  const setFrameSrc = ref(null);
  const selectedCharacter = ref(false);
  const selectedSticker = ref(false);
  const playAudio = () => {
    console.debug('audio');
  };

  const saveImage = (image) => {
    const imageDataStore = useImageDataStore();
    imageDataStore.setImageData(image);
    let canvas = document.querySelector('.webgl');
    let width = canvas.style.width;
    let height = canvas.style.height;
    imageDataStore.setCanvasSize(width, height);

    router.push({ path: '/complate' });
  };
  const setCharacter = (image) => {
    if (experience) {
      experience.world.removeSticker();
      experience.world.setCharacter(image.id);
    }
    selectedSticker.value = null;
    selectedCharacter.value = image.id;
  };

  const setFrame = (image) => {
    setFrameSrc.value = image.src;
  };

  const setSticker = (image) => {
    playAudio();
    experience.world.setSticker(image.name);
    experience.world.removeCharacter();
    selectedSticker.value = image.id;
    selectedCharacter.value = false;
  };

  onMounted(() => {
    console.log('Experience Mount!');

    experience = new Experience(document.querySelector('.webgl'), saveImage);
    // experience.value.init();
  });
  onUnmounted(() => {
    console.log('Experience UnMount!');

    // experience = new Experience(document.querySelector('.webgl'), saveImage);

    // experience.init();
  });

  onBeforeRouteLeave(() => {
    console.log('Experience Route Leave!');
    experience.destroy();
    experience.dispose();
    experience.init();
  });

  return {
    setCharacter,
    setSticker,
    setFrame,
    saveImage,
    experience,
  };
};

export default useExperience;
