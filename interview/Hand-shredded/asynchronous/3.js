function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("a");
      resolve("ok"); //resolve的值会传递给then的回调函数，即下文的res
    }, 1000);
  });
}

function b() {
  setTimeout(() => {
    console.log("b");
  }, 500);
}

// a().then((res) => {
//     b();
// })
a()
  .then(
    (res) => {
      // res == ok
      console.log(res, "------");
      b();
    },
    (err) => {
        console.log(err, "------");
    }
  )
  .catch((err) => {
    console.log(err, "------");
  });
