(function(doc, win) {  // 源码不干扰其他js文件
  var docEl = doc.documentElement; // 获取页面根节点html
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function() {
    var clientWidth = docEl.clientWidth // 设备宽度
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
  }

  win.addEventListener(resizeEvt, recalc) // 设备尺寸变更实时重置跟字体
  doc.addEventListener('DOMContentLoaded', recalc)
  
})(document, window);