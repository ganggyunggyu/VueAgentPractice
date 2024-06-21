<script setup>
import EventItem from '@/entities/stage/ui/EventItem.vue';
import EventDetailModal from '@/entities/stage/ui/EventDetailModal.vue';
import { useEventStore } from '@/stores/event';
import { ref, onMounted } from 'vue';
import { setVh } from '@/shared/lib/setVh';
import { playAudio } from '@/shared/lib/audio';

const store = useEventStore();
const eventsRef = ref([]);
const eventRef = ref({});
const isModal = ref(false);

const fetchEvents = () => {
  eventsRef.value = store.fetchData();
};

const handleEvent = (event) => {
  eventRef.value = event;
  isModal.value = true;
  playAudio();
};

onMounted(() => {
  fetchEvents();
  setVh();
});
</script>

<template>
  <EventDetailModal v-if="isModal" :event="eventRef" @update:isModal="isModal = $event" />
  <section>
    <EventItem
      v-for="event in eventsRef"
      :key="event.id"
      :icon="event.icon"
      :title1="event.title1"
      :title2="event.title2"
      :title3="event.title3"
      @click="() => handleEvent(event)"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin-top: calc(2 * var(--vh));
  height: calc(70 * var(--vh));
  overflow-y: scroll;
  gap: 5px;
}
</style>
