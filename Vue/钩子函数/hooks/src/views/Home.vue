<template>
    <div>
        home page

            <component :is="Hello"></component>

    </div>
</template>

<script setup>
import { onMounted,onActivated,onBeforeMount,onUnmounted,onDeactivated } from 'vue';
import Hello from '../components/Hello.vue';

onBeforeMount(() => {
    console.log('首页的onBeforeMount');
})
onMounted(() => {
    console.log('首页的onMounted');
})
onUnmounted(() => {
    console.log('首页的卸载');
})

onActivated(() => {//当被缓存的组件再次生效时，会调用这个生命周期
    console.log('首页的生效');
})
onDeactivated(() => {//当被缓存的组件被隐藏时，会调用这个生命周期
    console.log('首页的被缓存');
})
</script>

<style lang="css" scoped>

</style>