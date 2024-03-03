function request(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 10);
    }, 1000);
  });
}

function* gen() {
  let num1 = yield request(1);
  let num2 = yield request(num1);
  let num3 = yield request(num2);
  return num3;
}

// 模拟async
function generatorToAsync(generatorFn) { // 把generator函数变更成具有async功能的函数
    return function() { // 具有async功能的函数
        const gen = generatorFn(); // 生成迭代器

        return new Promise((resolve, reject) => {
            function loop(key,arg) {
                let res = null
                res = gen[key](arg) // gen.next(arg) // {value: Promise{}, done: false}
                const { value,done } = res
                if(done) { //递归出口
                    return resolve(value)
                } else {
                    Promise.resolve(value).then(val => loop('next',val)) // Promise.resolve()接收一个Promise对象为参数，会直接读取到该参数对象中resolve的值
                }
            }
            loop('next')
        })
    }
}

const asyncFn = generatorToAsync(gen);
asyncFn().then(res => {
    console.log(res);
})
