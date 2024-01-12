<template>
    <!-- tailwindcss 原子化css  1个单位 = 0.25rem -->
    <div class="flex items-center justify-between h-14">
        <div class="flex items-center pl-5">
            <IconPark 
                :icon="Left" 
                :size="iconSize" 
                :stroke-width="2"
                class="icon-button"
                @click="router.back()"
                />
            <IconPark
                :icon="Right"
                :size="iconSize"
                :stroke-width="2"
                class="icon-button"
                @click="router.forward()"
            />

            <div class="search ml-2">
                <SearchPop />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 使用vue-router提供的useRouter hook 函数获得路由对象
import { useRouter } from 'vue-router'
import { Left, Right, Search } from '@icon-park/vue-next'
import SearchPop from '@/components/layout/header/SearchPop.vue'

const router = useRouter()
const iconSize = 22
</script>

<style scoped>

</style>