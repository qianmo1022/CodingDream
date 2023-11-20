// 栈(只能用push和pop的数组或者只能用push和shift的数组) 先进后出
// let stack = []

//队列
let queue = [] //只能用push和shift的数组（或者只能用pop和unshift的数组） 先进先出

queue.push('宫保鸡丁')
queue.push('辣椒炒辣椒')
queue.push('红烧肉')

while (queue.length) {
    const top = queue[0]
    console.log(top);
    queue.shift()
}