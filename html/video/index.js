var speed=document.querySelector('.speed')
var bar=document.querySelector('.speed-bar')
var video=document.querySelector('.flex')

speed.addEventListener('mousemove',function(e) {
    var y=e.y - speed.offsetTop
    var percent=y/speed.offsetHeight
    var height=Math.round(percent*100)+'%'
//横条背景变化
    bar.style.height=height

    var min=0.4
    var max=4
    var playbackRate=percent*(max-min)+min
//竖条数字变化
    bar.textContent= playbackRate.toFixed(2)+'x'

//视频播放速度
    video.playbackRate=playbackRate    

    console.log(height)
})