<template>
	<view class="song">
		<image :src="data.img" mode=""></image>
		<view class="desc">{{data.title}}</view>
		<view class="flex-box">
			<view class="price">￥100</view>
			<view class="market-price">￥200</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	data:Object
})
</script>

<style lang="scss">

</style>