<template>
	<view class="mine">
		<wyheader icon="more-filled" bgColor="transparent" :needBox="false">
			<template v-slot:content>
				<view>我的音乐</view>
			</template>
		</wyheader>

		<menuLeft></menuLeft>

		<view class="mine-bd">
			<view class="user">
				<view class="pic">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>

				<view class="user-online" v-if="isLogin">
					<view class="username">
						<text>蜗牛</text>
					</view>
					<view class="user-desc">
						<view class="user-desc-horoscope">
							<text class="iconfont icon-boy"></text>
							<text>90后</text>
							<text>射手座</text>
						</view>
						<view class="user-desc-address">
							<text>江西 南昌</text>
						</view>
						<view class="user-desc-age">
							<text>村龄7年</text>
						</view>
					</view>
					<view class="user-wyInfo">
						<view class="wyInfo-gz">
							<text>10</text>
							关注
						</view>
						<view class="wyInfo-fs">
							<text>13</text>
							粉丝
						</view>
						<view class="wyInfo-dj">
							<text>Lv.8</text>
							等级
						</view>
						<view class="wyInfo-tg">
							<text>3121时</text>
							听歌
						</view>
					</view>
					<view class="user-list">
						<view class="zj btn">
							<text class="iconfont icon-zuijin-on"></text>
							<text class="text">最近</text>
						</view>
						<view class="bd btn">
							<text class="iconfont icon-bendisucai"></text>
							<text class="text">本地</text>
						</view>
						<view class="yp btn">
							<text class="iconfont icon-shangchuanyunpan"></text>
							<text class="text">云盘</text>
						</view>
						<view class="yg btn">
							<text class="iconfont icon-yigou"></text>
							<text class="text">已购</text>
						</view>
						<view class="fl btn">
							<text class="iconfont icon-bendifenlei"></text>
						</view>
					</view>
				</view>

				<view class="user-outline" v-else @click="login">
					<text>立即登录</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { apiGetUserInfo } from '@/api/mine.js';
import { onLoad } from '@dcloudio/uni-app';

const store = useStore();
const userInfo = ref({});

const isLogin = computed(() => {
	return store.state.loginState;
});

const login = () => {
	uni.reLaunch({
		url: '/pages/login/login'
	});
};

// onLoad(() => {
// 	getUserInfo()
// })

const getUserInfo = async () => {
	const res = await apiGetUserInfo(store.state.userInfo.userId); // 传入用户uid
	console.log(res.data.profile);
	userInfo.value = res.data.profile;
};

watch(
	() => store.state.userInfo.userId,
	(newVal, oldVal) => {
		// console.log(newVal, oldVal);
		if (newVal) {
			getUserInfo();
		}
	},
	{ immediate: true }
);
</script>

<style lang="scss" scoped>
.mine-bd {
	padding: 280rpx 30rpx 40rpx;
	background-color: #93969d;
	.user {
		.pic {
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
			image {
				border: 1rpx solid #fff;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-outline {
			text-align: center;
			margin: 30rpx 0;
			color: #fff;
			:deep(.uni-icons) {
				color: #fff !important;
			}
		}
		.user-online {
			text-align: center;
			color: #fff;
			.username {
				margin: 40rpx 0 16rpx 0;
				font-size: 40rpx;
				font-weight: 500;
			}
			.user-desc {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				text {
					margin-left: 10rpx;
					&.iconfont {
						color: #72939f;
					}
				}
			}
			.user-wyInfo {
				display: flex;
				justify-content: center;
				font-size: 24rpx;
				margin: 40rpx 0;
				color: #eee;
				view {
					margin-left: 40rpx;
					&:first-child {
						margin-left: 0;
					}
					text {
						font-size: 28rpx;
						color: #fff;
					}
				}
			}
			.user-list {
				display: grid;
				grid-template-columns: 2fr 2fr 2fr 2fr 1fr;
				grid-column-gap: 10rpx;
				.btn {
					padding: 10rpx 0;
					font-size: 24rpx;
					background-color: rgba(255, 255, 255, 0.1);
					border-radius: 10rpx;
					.iconfont {
						font-size: 24rpx;
						margin-right: 4rpx;
					}
				}
			}
		}
	}
}
</style>