<script setup>
  import { onMounted, ref } from 'vue';
  import BottomButtonNav from '@/features/busan-coex/BottomNavigation.vue';
  import Tutorial from '@/features/busan-coex/Tutorial.vue';
  import TopButtonNav from '@/features/busan-coex/TopNavigation.vue';
  import Loading from '@/features/busan-coex/Loading.vue';
  import Capture from '@/features/capture/Capture.vue';
  import StickerSelectContainer from '@/features/busan-coex/StickerSelectContainer.vue';
  import CharacterSelectContainer from '@/features/busan-coex/CharacterSelectContainer.vue';

  import useExperience from '@/features/capture/hooks/useExperience';
  import useSetVh from '@/shared/hooks/useSetVh';
  import { INIT } from '@/features/constant/URL';

  const isCharacterListView = ref(false);
  const isStickerListView = ref(false);
  const isTutorial = ref(true);
  const { onSetVh } = useSetVh();

  const { setCharacter, setFrame } = useExperience();
  const updateStickerListView = (value) => {
    isStickerListView.value = value;
  };

  const updateCharacterListView = (value) => {
    isCharacterListView.value = value;
  };

  const handleCloseTutorial = () => {
    isTutorial.value = false;
    setCharacter(INIT.CHARACTER);
    setFrame(INIT.FRAME);
  };

  onMounted(() => {
    onSetVh();
  });
</script>

<template>
  <Loading />
  <TopButtonNav />
  <Tutorial v-if="isTutorial" @click="handleCloseTutorial" />
  <Capture :isTutorial="isTutorial" />
  <BottomButtonNav
    v-if="!isTutorial"
    :isCharacterListView="isCharacterListView"
    :isStickerListView="isStickerListView"
    @update:isStickerListView="updateStickerListView"
    @update:isCharacterListView="updateCharacterListView"
  />
  <StickerSelectContainer
    v-if="isStickerListView"
    :isStickerListView="isStickerListView"
    @update:isStickerListView="updateStickerListView"
  />
  <CharacterSelectContainer
    v-if="isCharacterListView"
    :isCharacterListView="isCharacterListView"
    @update:isCharacterListView="updateCharacterListView"
  />
</template>

<style scoped></style>
