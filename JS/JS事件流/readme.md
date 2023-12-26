# js事件流 （面试题：事件触发过程是什么样的？）
1. 在window上往事件触发处传播，遇到注册的 捕获 事件可以被触发
2. 到达事件触发处
3. 从事件触发处往window上传播，遇到注册的  冒泡 事件会触发

- JS 事件默认都在冒泡的过程中触发
- event.stopPropagation() || event.stopImmediatePropagation()//阻止默认事件的传播，用在冒泡阶段阻止冒泡，用在捕获阶段阻止捕获
- event.stopImmediatePropagation() 阻止同一个DOM绑定多个相同事件

# 事件委托
借助冒泡机制，将原本要添加在多个子容器上的事件，添加到父容器上