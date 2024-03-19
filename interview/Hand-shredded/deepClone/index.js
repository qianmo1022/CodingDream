//手动实现一个深拷贝的方法
let obj = {
  name: "阿伟",
  age: 18,
  like: {
    type: "coding",
  },
};
function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 过滤掉原型链上的属性
      if (typeof obj[key] === "object" && obj[key] !== null) {
        objClone[key] = deepCopy(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }

  return objClone;
}
