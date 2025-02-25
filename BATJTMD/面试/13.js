let count = 0;
function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = 100;
      resolve(); // 将Promise对象状态改为resolved
    }, 1000);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = 200;
      resolve("ok");
    }, 500);
  });
}

function C() {
  console.log(count);
}

// 1. A()立即执行返回了一个Promise对象，但是此时Promise对象的状态是pending，所以不会立即执行then方法
// 2. 1000ms后，A()返回的promise对象状态变为resolved
// 3. 调用then方法，将B函数作为回调函数
A()
  .then((res) => { // then默认返回一个Promise对象，状态为pending，并会继承上一个Promise对象的状态
    // console.log(111);
    return B(); // 当then的回调中有return时，会将return的值覆盖掉then默认返回的Promise对象
  })
  .then(() => { // 所以当A()执行完毕后，会立即执行这个then方法，此时B()还未执行，所以count为100
    // console.log(222);
    C();
  });
