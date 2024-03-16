# 1. js 数组有哪些方法？
1. 增：push unshift splice concat
2. 删：pop shift splice slice
3. 改：rever sort
4. 查：indexOf lastIndexOf includes find 
5. 遍历： forEach map filter every some reduce 
    - forEach((item,i,arr) => {}): 不会返回一个新数组，除非设置arr[i]，不然不会修改原数组，否则不可以修改原数组。
    - map((item,i,arr) => {}):返回一个长度和原数组长度一样的数组，可以修改原数组。
6. 转换：join split

- forEach & map 区别：
1. map会返回一个新的数组
2. return 无法终止forEach的循环，forEach中没有 break和continue

# 2. js 字符串有哪些方法？
1. 增: concat padEnd padStart
2. 删: slice substr substring
3. 改: replace repeat trim trimLeft trimRight toUpperCase toLowerCase
4. 查: includes indexOf lastIndexOf charAt startsWith EndsWith 
5. 转换：charCodeAt split 

# 3. == 和 === 的区别

# 4. 说说JS中的类型转换
- 是什么
    JS里面有原始类型和引用类型的区分

- 显示和隐式
    1. 开发中通常需要将一个类型转为另一个类型时，通过调用构造函数实现显示类型转换。
    2. 当开发中碰到比较运算符或者算数运算符时，当符号两边的类型不一致时，JS引擎会自动进行隐式类型转换。