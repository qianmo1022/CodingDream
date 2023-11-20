var MyQueue = function() {//构造函数的this和构造函数原型上的this都指向实例对象
    this.stack1 = []
    this.stack2 = []
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function() {
    //将栈1中的数据倒到栈2中
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    //取出栈2的栈顶元素
    return this.stack2.pop()
};

MyQueue.prototype.peek = function() {
    if (!this.stack2.length) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]

    // let top = this.pop()
    // this.stack2.push(top)
    // return top
};

MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};

let queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.push(3)  
console.log(queue.pop()); // 1
queue.push(4)
queue.push(5)
console.log(queue.peek());// 2
console.log(queue.pop());// 2
console.log(queue.empty());// false
