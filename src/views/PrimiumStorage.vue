<script setup>
  import BottomNavigation from '@/features/stage/BottomNavigation.vue';
  import TopNavigation from '@/features/storage/TopNavigation.vue';
  import RewardList from '@/features/storage/RewardList.vue';
  const rewardImageList = [
    { src: '02_Coupon_active.png', textList: ['마법사 벨', '웹스티커 1세트'] },
    { src: '03_Coupon_active.png', textList: ['우', '웹스티커 1세트'] },
    { src: '04_Coupon_active.png', textList: ['마법사 벨', '웹스티커 1세트'] },
    { src: 'IceCream_active.png', textList: ['마법사 벨', '웹스티커 1세트'] },
  ];

  const frame = 'bg_reward3.png';
</script>

<template>
  <TopNavigation title="프리미엄 보상 보관함" />
  <RewardList
    :rewardImageList="rewardImageList"
    :frame="frame"
    :isGray="true"
  />
  <BottomNavigation />
</template>
<script>
  export default {
    name: 'PrimiumStorage',
  };
</script>
<style></style>
