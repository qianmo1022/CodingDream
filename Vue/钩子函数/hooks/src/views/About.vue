<template>
    <div>
        about page
    </div>
</template>

<script setup>
import { onBeforeRouteUpdate,onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from, next) => {
    console.log('onBeforeRouteUpdate',to, from);
    const flag = window.confirm('确定离开吗？')
    if(flag){
        console.log('离开');
    } else {
        console.log('取消离开');
    }
});

</script>

<style lang="css" scoped>

</style>