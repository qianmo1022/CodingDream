# set
1. 是一种 key和value相等的特殊对象
2. set 对象中的值是唯一的
3. 具有迭代器属（iterator）性
接收的是数组，是一种特殊的数组

for...of只能遍历具有迭代器属性的数据结构,如：set，map，string等

# map
1. 可以用任意数据类型做key的一种对象

# WeakSet && WeakMap
一个对象被WeakSet所引用，在垃圾回收的眼中，该对象是没有被引用的，
那么只要垃圾回收机制一生效，该对象所占据的内存空间就会被销毁

weakset只能存symbol和对象