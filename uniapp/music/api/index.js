import baseUrl from './request.js'

// 首页的接口请求
export const apiGetBanner = (data) =>{
	return uni.request({
		url:baseUrl + '/banner',
		method:'GET',
		data:data
	})
}

export const apiGetBall = () => {
	return uni.request({
		url:baseUrl + '/homepage/dragon/ball',
		method:'GET'
	})
}
// 推荐歌单
export const apiGetRecommendList = () => {
	return uni.request({
		url:baseUrl + '/recommend/resource',
		method:'GET'
	})
}
// 推荐歌曲
export const apiGetRecommendSongs = () => {
	return uni.request({
		url:baseUrl + '/recommend/songs',
		method:'GET'
	})
}
// 雷达歌单
export const apiGetPersonalizedList = () => {
	return uni.request({
		url:baseUrl + '/personalized?limit=6',
		method:'GET'
	})
}