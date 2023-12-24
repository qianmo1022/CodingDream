<template>
    <ul>
      <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic">
      </li>
    </ul>
</template>

<script setup lang="ts">
import { toRefs,onMounted } from 'vue'
const { banners } = toRefs(useBannerStore())
const { getBanners } = useBannerStore()
import { useBannerStore } from '../store/banner'
onMounted(async () => {
  await getBanners()
})
</script>

<style scoped>

</style>