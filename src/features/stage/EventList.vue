<script setup>
import EventItem from '@/entities/stage/ui/EventItem.vue';
import { useEventStore } from '@/stores/event';
import { ref, onMounted } from 'vue';
import { setVh } from '@/shared/lib/setVh';

const store = useEventStore();
const events = ref([]);

const fetchEvents = () => {
  events.value = store.fetchData();
};

// const updateEvents = () => {
//   store.setEventsData();
//   fetchEvents();
// };

onMounted(() => {
  fetchEvents();
  console.log(events.value)
  setVh()
});
</script>

<template>
  <section >
    <EventItem
    v-for="event in events" :key="event.id"
      :icon="event.icon"
      :title1="event.title1"
      :title2="event.title2"
      :title3="event.title3"
    />
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  margin-top: calc(2*var(--vh));
  height: calc(70*var(--vh));
  overflow-y: scroll;
  gap: 5px
}
</style>
