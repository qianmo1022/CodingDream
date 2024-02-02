<template>
    <div>
        <p>{{ count }}</p>
        <button @click="() => count++ ">+</button>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';

const count = ref(0);

// onMounted(() => {
//     console.log('hello子组件的onMounted');
// })

</script>

<style lang="css" scoped>

</style>