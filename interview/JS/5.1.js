let obj = {
  a: 1,
  b: {
    n: 2,
  },
};

function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {// 过滤掉原型链上的属性
      if (typeof obj[key] === "object" && obj[key] !== null) {
        objClone[key] = deepCopy(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }

  return objClone;
}

let newObj = deepCopy(obj);
obj.b.n = 20;

console.log(newObj);
