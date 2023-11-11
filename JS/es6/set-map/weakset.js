let obj = {name: '德玛西亚'}

let ws = new WeakSet()
ws.add(obj)

// obj = null//当obj为null时，WeakSet会自动回收内存，不会造成内存泄漏

console.log(ws); // {}