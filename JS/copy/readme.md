# 拷贝
通常只针对于引用类型

# 浅拷贝 新对象受老对象变化的影响
- 常见的浅拷贝方法：
1. Object.create(x)
2. Object.assign({}, x)
3. concat
4. slice
5. 数组结构
6. arr.toReversed().reverse()

# 深拷贝
原始类型都是深拷贝
- 常见的深拷贝方法：
    JSON.parse(JSON.stringify(obj))

- 缺点：
1. 无法拷贝 undefined, function, Symbol, bigint 这几种类型的数据
2. 无法处理循环引用
