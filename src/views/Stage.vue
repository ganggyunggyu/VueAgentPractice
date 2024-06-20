<script setup>
import TextBox from '../features/stage/TextBox.vue';
import EventList from '../features/stage/EventList.vue';
import BottomNavigation from '../features/stage/BottomNavigation.vue';
import Background from '@/shared/ui/Background.vue';
import { setVh } from '@/shared/lib/setVh';
</script>
<template>
  <main>
    <Background/>
  <TextBox />
  <EventList />
  <BottomNavigation />
</main>
</template>

<script>
export default {
  name:'Stage',
  setup(){  
    setVh()
}

};
</script>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(5*var(--vh));
}
</style>
