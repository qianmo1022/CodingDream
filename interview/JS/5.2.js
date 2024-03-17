let obj = {
  a: 1,
  b: {
    n: 2,
  },
};

function deepCopy(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(obj);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    };
  });
}

async function fn() {
  let newObj = await deepCopy(obj);
  obj.b.n = 20;

  console.log(newObj);
}
fn();
