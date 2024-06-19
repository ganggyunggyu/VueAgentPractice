<script setup>
import OptionItem from '../../entities/stage/ui/OptionItem.vue';
import { useEventStore } from '../../stores/event';
import { ref, onMounted } from 'vue';
import { getUrl } from '../../shared/lib/getUrl';

const store = useEventStore();
const events = ref([]);

const fetchEvents = () => {
  events.value = store.fetchData();
};

const updateEvents = () => {
  store.setEventsData();
  fetchEvents();
};

onMounted(() => {
  fetchEvents();
  console.log(events.value);
});
</script>

<template>
  <section v-for="event in events" :key="event.id">
    <OptionItem
      :icon="event.icon"
      :title1="event.title1"
      :title2="event.title2"
      :title3="event.title3"
    />
  </section>
</template>

<style scoped></style>
