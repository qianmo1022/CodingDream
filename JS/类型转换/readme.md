# 基本数据类型的转换
1. 转布尔值
2. 转数字
3. 转字符串
4. 转对象

# 对象转原始值
- 转字符串 调用的其实就是Object.prototype.toString()
1. {}.toString() 返回由 "[object" 和 class 和"]" 组成的字符串
2. [].toString() 返回由数组内部元素以","拼接的字符串
3. xx.toString() 直接返回字符串字面量

- valueOf
1. 用于转换包装类


# ToPrimitive(js自己调用)
ToPrimitive(obj,Number) ==> Number({})
1. 如果obj是基本类型，直接返回
2. 否则，调用valueOf方法，如果得到原始值，则返回
3. 否则，调用toString方法，如果得到原始值，则返回
4. 否则，报错

ToPrimitive(obj,String) ==> String({})
1. 如果obj是基本类型，直接返回
2. 否则，调用toString方法，如果得到原始值，则返回
3. 否则，调用valueOf方法，如果得到原始值，则返回
4. 否则，报错

# 对象转布尔就是true

# 一元运算符 +

# 二元运算符 +
lprim + rprim == ToPrimitive(v1) + ToPrimitive(v2)
1. 当 “ + ” 两边有一个是字符串，则按照字符串进行拼接
2. 否则，转到 number 进行计算
