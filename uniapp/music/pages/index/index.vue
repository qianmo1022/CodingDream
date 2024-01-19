<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar @confirm="search" @input="input" placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		
		<!-- menu -->
		<menuLeft />

		<view class="text-area">
			<text class="title">hello</text>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.index {
	.search {
		width: 500rpx;
		height: 60rpx;
		.uni-searchbar{
			height: 100%;
			padding: 0;
			border-radius: 100rpx;
			.uni-searchbar__box{
				padding: 0;

			}
		}
	}
}
</style>