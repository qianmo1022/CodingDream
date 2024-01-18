<script>
	export default {
		globalData:{
			name:'全局的名称'
		},
		onLaunch: function(e) {
			console.log('App Launch',e)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'common/font/font_4310348_9dj5zn67wvr/iconfont.css';
</style>
