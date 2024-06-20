<script setup>
import { setVh } from '@/shared/lib/setVh';
import PrevButtonRed from '@/shared/ui/PrevButtonRed.vue';
import QuestionButton from '@/shared/ui/QuestionButton.vue';
import { defineProps, onMounted } from 'vue';

defineProps({
    title: {
        type: String
    }
})

onMounted(()=>{
    setVh()
})
</script>


<template>
    <nav>
<button @click="redirectPrev">
    <PrevButtonRed/>
</button>
<p>{{ title }}</p>
<button>
    <QuestionButton/>
</button>
</nav>
</template>

<script>
export default {
    methods:{
        redirectPrev: ()=>{
            this.$router.go(-1)
        }
    } 
}
</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    background-color: var(--color-red);
    height: calc(10*var(--vh));
}
button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
button svg {
    width: 100%;
    height: 100%;
}
p{
    color: white;
    font-size: 16px;
    font-weight: 800;
}
</style>