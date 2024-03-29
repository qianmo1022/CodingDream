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
let g = gen();
const next1 = g.next();
console.log(next1);
next1.value.then((res1) => {
  console.log(res1);

  const next2 = g.next(res1);
  next2.value.then((res2) => {
    console.log(res2);
    const next3 = g.next(res2);
    next3.value.then((res3) => {
      console.log(res3);
    });
  });
});

// request(1).then(res1 => {
//     console.log(res1)
//     request(res1).then(res2 => {
//         console.log(res2)
//     })
// })

// async function fn() {
//     const res1 = await request(1)
//     const res2 = await request(res1)
//     console.log(res2);
// }
// fn()
