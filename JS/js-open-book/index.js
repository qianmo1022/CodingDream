var front = document.getElementsByClassName('front-cover')[0]
var hold = false
var clamp = function (val,min,max) {
    return Math.max(min,Math.min(val,max))
}


//鼠标是否按下
front.onmousedown = function () {
    hold = true
}
//鼠标松开
window.onmouseup = function () {
    hold = false
}

window.onmousemove = function (e) {
    if (hold) {
        // console.log('move');

        //修改左半本书的角度，卡片旋转，阴影倾斜
        var deg = clamp((window.innerWidth/2-e.x+300) / 300 * -90, -180,0)//整本书的父容器宽度为300,最小角度-180，最大角度0
        // console.log(deg);
        front.style.transform = `rotateY(${deg}deg)`
        //整本书立起来 60+deg/8
        //卡片立起来 deg/2
        //阴影倾斜 deg/8
    }

}

// console.log(front);