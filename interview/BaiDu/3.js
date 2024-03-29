const obj1 = {a:1}
const obj2 = {b:2}

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// 1. 引用类型的值怎么看
// "=="判断类型是否相等会发生隐式转换，转换成数字类型
// valueOf(),toString(),
// 调用toPrimitive()，转换成基础数据类型去比较，他们都会变成"[object Object]",所以他们的值是相等的
// 但是他们的引用地址是不相等的，所以被判定为不相等
// "==="判断类型和值是否相等，不会发生隐式转换
// 因为两个是对象，所以他们的引用地址是不相等的，所以被判定为不相等
// 2. 对象的比较
// 对象的比较是引用地址的比较


// 在 JavaScript 中，对象之间的比较实际上是比较它们的引用，即它们在内存中的存储地址。在对两个对象进行比较时，JavaScript 引擎会执行以下步骤：

// 相等运算符（==）比较过程：

// 当使用相等运算符比较两个对象时，JavaScript 引擎会首先检查操作数的类型。
// 如果两个操作数的类型相同，它们会被直接比较。如果它们都是对象类型，则比较它们的引用。
// 如果操作数的类型不同，JavaScript 引擎会尝试将它们转换为相同的类型，然后再进行比较。但是对象无法直接转换为数字或字符串等基本类型，因此比较过程会直接比较它们的引用。
// 严格相等运算符（===）比较过程：

// 严格相等运算符不会进行类型转换，它要求操作数的值和类型都相同才返回 true。
// 当比较两个对象时，严格相等运算符会直接比较它们的引用，而不会尝试转换对象的值或类型。
// 在给定的代码中，obj1 和 obj2 是两个不同的对象，即使它们具有相同的属性，它们在内存中的存储地址也是不同的。因此，无论是使用相等运算符还是严格相等运算符，它们都会返回 false，因为它们的引用不同。

// 总之，在比较两个对象时，JavaScript 中的相等运算符和严格相等运算符都会比较它们的引用，而不会比较对象的属性值。






