# 企业级界面开发规则

- html css js 功能分离
- css 架构
    - reset.css
        去除浏览器间的样式区别，无差别页面显示
        box-sizing 盒子大小的计算方式
        outline 轮廓
        不同的浏览器 edge chrome 内核不同 Firefox
        文档流 body开始
        css面试考题：
        盒子在页面上占了多少呢？
        公摊
        标准盒子模型（chrome以及大部分浏览器在使用的） = content + padding + border + margin
        2种盒模型
        IE盒模型 = content（自动缩放）+ padding + border + margin
    - base.css 通用样式
- css 命名套路
    - page
        __hd __bd __ft
    - btn panel cell
    - 框架组件 BEM
- css “ + ” 兄弟选择器
- Google 图片格式
    base64 图片 小一点简单的   在css文件里 
    其他图片格式：jpg|png|jpeg|wtt|webp     jpg等图片格式比较大 请求的并发
