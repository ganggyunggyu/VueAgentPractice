<script setup>
import BottomNavigation from '@/features/stage/BottomNavigation.vue';
import TopNavigation from '@/features/storage/TopNavigation.vue';

</script>

<template>
    <TopNavigation title="일반 보상 보관함"/>
    <BottomNavigation/>
</template>
<script>
export default {
    name: 'NormalStorage'
}
</script>
<style></style>