// red 3s
// yellow 2s
// green 5s

function red() {
  console.log("红灯");
}

function yellow() {
  console.log("黄灯");
}

function green() {
  console.log("绿灯");
}

function light(cb, wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, wait);
  });
}

function lightStep() {
  Promise.resolve().then(() => {
    return light(red,3000)
  }).then(() => {
    return light(yellow,2000)
  }).then(() => {
    return light(green,5000)
  }).finally(() => {
    lightStep();
  });
//   light(red, 3000);
//   light(yellow, 2000);
//   light(green, 5000);
}

lightStep();
