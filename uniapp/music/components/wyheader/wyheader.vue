<template>
	<view class="header" :style="{backgroundColor: bgColor}">
		<uni-icons type="bars" size="24" @click="showMenu"/>
		<view class="content">
			<!-- 添加一个插槽 -->
			<slot name="content"></slot>
		</view>
		<uni-icons :type="icon" size="24" />
	</view>
	<view class="box" v-if="needBox"></view>
</template>

<script setup>
import { useStore } from 'vuex'
	
	const store = useStore()

	defineProps({
		icon:{
			type:String,
			default:'mic'
		},
		bgColor:{
			type:String,
			default:"#fff"
		},
		needBox:{
			type:Boolean,
			default:true
		}
	})
	const showMenu = () => {
		store.commit('changeIsShowMenu',true)
	}
</script>

<style lang="scss">
.header{
	background-color: #fff;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15rpx;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	z-index: 999;
}
.box{
	height: 100rpx;
}
</style>