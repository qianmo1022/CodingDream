// js 早期的js 没有模块化的概念，文件的加载顺序手动
{/* <script src="./a.js"></script>
<script src="./b.js"></script>
<script src="./c.js"></script> */}
// script标签会阻塞页面的渲染, 加入deffer属性才会异步加载

// node commonjs
    // js ? 语言 -> 编译成二进制   浏览器的V8引擎 chromium内核 不包含浏览器UI 

    // node 底层是c++ 封装了chrominum js的运行时 commonJS require + module.exports
    // 后端天生复杂
    // 前端应用随着Vue/React也变得复杂起来了 ESmodule 出来了
    // 难道node 用commonjs 前端用ESModule吗？ node 也支持 ESModule
    // mjs？ node 安装的新版本，可直接支持 ESModule，如果老点的版本用.mjs后缀来声明