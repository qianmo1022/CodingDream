<template>
    <li class="todo" :class="{ completed:todo.done }">
        <div class="view">
            <label for="" v-text="todo.text"></label>
        </div>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    todo:Object
})
</script>

<style lang="scss" scoped>

</style>