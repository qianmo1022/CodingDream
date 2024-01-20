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

		<!-- banner -->
		<view class="banner">
			<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#eee" indicator-active-color="#d81e06" >
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>

			</swiper>
		</view>
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 推荐歌单 -->
		<songList :list = state.recommendList />
		
	</view>
</template>

<script setup>
import { apiGetBanner,apiGetBall,apiGetRecommendList } from '@/api/index.js'
import { onLoad } from '@dcloudio/uni-app'
import { reactive } from 'vue';

const state = reactive({
	banners: [],
	balls:[],
	recommendList:[]
})

onLoad(() => {
	getBall()	
	getBanner()
	getRecommendList()
}) 
// 获取Banner图
const getBanner = () => {
	apiGetBanner({type:2}).then(res => {
		state.banners = res.data.banners
	})
}
// 获取圆形图标的入口列表
const getBall = async() =>{
	const { data:{data:balls} } = await apiGetBall()
	state.balls = balls
}

const getRecommendList = async() => {
	const {data:{recommend:recommend}} =  await apiGetRecommendList()
	state.recommendList = recommend
}

</script>

<style lang="scss" scoped>
.index {
	padding: 0 20rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar){
			height: 100%;
			padding: 0;
			border-radius: 100rpx;
			.uni-searchbar__box{
				height: 100%;
				padding: 0;
			}
		}
	}
	.banner{
		.swiper-item{
			height: 100%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
	}
	.balls{
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item{
			flex: 0 0 20%;
			font-size: 24rpx;
			text-align: center;
			.icon{
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;// 居中
				margin-bottom: 14rpx;
				background-color: $uni-primary-color;
				border-radius: 10px;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
}
</style>