import { onMounted } from 'vue';
import { setVh } from '../lib/setVh';

const useSetVh = () => {
  const onSetVh = () => {
    onMounted(() => {
      setVh();
      window.addEventListener('resize', setVh);
    });
  };
  return {
    onSetVh,
  };
};

export default useSetVh;
