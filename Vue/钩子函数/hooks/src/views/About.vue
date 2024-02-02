<template>
    <div>
        about page
            <component :is="Hello"></component>

    </div>
</template>

<script setup>
import { onBeforeRouteUpdate,onBeforeRouteLeave } from 'vue-router';
import Hello from '../components/Hello.vue';
import { onMounted } from 'vue';
// onBeforeRouteLeave((to, from, next) => {
//     console.log('onBeforeRouteUpdate',to, from);
//     const flag = window.confirm('确定离开吗？')
//     if(flag){
//         console.log('离开');
//     } else {
//         console.log('取消离开');
//     }
// });

onMounted(() => {
    console.log('关于页面的onMounted');  
})

</script>

<style lang="css" scoped>

</style>