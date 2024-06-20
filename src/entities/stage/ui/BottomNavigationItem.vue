<script setup>
  import {defineProps} from 'vue'

  defineProps({
    icon: {
      type: String
    },
    
lable: {
  type:String
}
  })
</script>

<template>
  <button>
    <img :src="`${icon}`" alt="" />
    <p>{{ lable }}</p>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  padding: 10px;
  border: 3px solid var(--color-red);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

}
img{
width: 100%;
height: 100%;
}
p{
  color: white;
  width: 100px;
  position: absolute;
  bottom: -20px;
  
}
</style>
