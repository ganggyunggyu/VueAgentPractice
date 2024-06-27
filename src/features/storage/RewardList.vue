<script setup>
  const props = defineProps(['rewardImageList', 'frame', 'isGray']);

  const getRewardImageList = props.rewardImageList.map((obj) => {
    return {
      src: new URL(
        `../../../static/resource/storageBox/${obj.src}`,
        import.meta.url,
      ).href,
      textList: obj.textList,
    };
  });

  const getFrameImageUrl = new URL(
    `../../../static/resource/storageBox/${props.frame}`,
    import.meta.url,
  ).href;
</script>

<template>
  <div class="container">
    <div
      class="item"
      :class="props.isGray ? 'gray' : ''"
      v-for="image in getRewardImageList"
      :key="image"
    >
      <img class="frame" :src="getFrameImageUrl" alt="" />
      <img class="reward" :src="image.src" alt="" />
      <div class="text-container">
        <p v-for="p in image.textList">{{ p }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    opacity: 0.5;
  }

  .item {
    position: relative;
    width: 199px;
    height: 269px;
  }
  .frame {
    position: absolute;
    top: 0;
    left: 0;
  }
  .reward {
    width: 80%;
    z-index: 1;
    position: absolute;
    top: 35%;
    left: 48%;
    transform: translate(-50%, -50%);
  }
  .text-container {
    width: 100%;
    text-align: center;
    z-index: 1;
    position: absolute;
    top: 80%;
    left: 48%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }
  .gray {
    filter: grayscale(100%);
  }
</style>
