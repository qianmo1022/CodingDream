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
