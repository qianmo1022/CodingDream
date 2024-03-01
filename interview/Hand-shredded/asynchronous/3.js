function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a");
      resolve("ok"); //resolve的值会传递给then的回调函数，即下文的res
    }, 1000);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("b");
      resolve("yes"); //resolve的值会传递给then的回调函数，即下文的res
    }, 500);
  });
}

// a().then((res) => {
//     b();
// })
// a()
//   .then(
//     (res) => {
//       // res == ok
//       console.log(res, "------");
//       return b();
//     },
//     (err) => {
//         console.log(err, "------");
//     }
//   )
//     .then((res)=>{
//         console.log(res,"then2");
//     })

Promise.race([a(), b()]).then((res) => {
  console.log(res);
});

