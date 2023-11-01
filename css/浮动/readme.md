# 块级
1. 默认占据一整行
2. 可以设置宽高

# 行内块
1. 可以同行显示
2. 可以设置宽高

# 行内
1. 可以同行显示
2. 不能设置宽高
<!-- 如果要将行内元素span设置宽高则用css将其转化为行内块 -->

# 浮动
1. 脱离文档流
2. 文字环绕
3. 让块级元素同行显示
4. 让行内元素可以设置宽高
4. 可以使用margin 但是不能使用margin:0 auto;
会导致父容器的高度塌陷导致影响父容器之后的元素的页面排布

# 清除浮动（清除的是负面影响）
1. 给父容器设置高度（过于生硬）
2. 在最后一个浮动元素后面添加新的元素，在新的元素上做清除浮动
3. 在父容器的伪元素after上做 清除浮动(推荐)
4. 在下方被浮动影响的容器上做清除浮动
5. BFC （推荐，最常用）

# BFC 容器 Block Formatting Context(块级格式化上下文)（本质是用BFC容器的特征去掩盖掉浮动的负面效果）
- 哪些属性可以创建BFC效果
浮动和定位变成bfc也脱离文档流：
1. float : left || right
2. position: absolute || fixed
变成bfc不脱离文档流：
3. display: inline-block
4. display：table-cell......绝大多数table开头的都可以
5. overflow：hidden || auto || overley || scroll
6. 弹性盒子 （display: flex || inline-flex）

- BFC的特点：
1. BFC容器在计算高度时，会把浮动元素也考虑在内
2. 解决内外margin重叠问题
<!-- 非BFC盒子模型的子容器margin-top相对父容器在H5中会出现相对父容器的父容器的外边距生效而无法相对于父容器的外边距生效 -->


