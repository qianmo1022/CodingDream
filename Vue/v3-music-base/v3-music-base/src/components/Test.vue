<template>
    <div>
        <!-- slot 代表插槽，组件内部可以被外部定制 -->
        <slot name="header" />
        Test
        <slot />
        <slot name="footer" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>