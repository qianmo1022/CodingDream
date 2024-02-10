
// 使用两个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
    if(!this.queue1.length) {
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
    while(this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
    }
    return this.queue1.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();
    this.queue1.push(x);
    return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length;
};


// 使用一个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.queue.length;
    while(size-- > 1) {
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();
    this.queue.push(x);
    return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length;
};

// 时间复杂度：push() 的时间复杂度为 O(1)；pop() 的时间复杂度为 O(n)；top() 的时间复杂度为 O(n)；empty() 的时间复杂度为 O(1)。