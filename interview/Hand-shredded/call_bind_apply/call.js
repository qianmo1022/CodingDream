Function.prototype.myCall = function(context, ...args) {  
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }
    // 如果context不是对象或者函数，则转换为对象  
    context = context ? Object(context) : window;  
      
    // 给context添加一个唯一标识的属性，属性值为当前函数  
    const fnSymbol = Symbol('fn');  
    context[fnSymbol] = this;  
      
    // 使用context调用这个方法，并传入参数  
    const result = context[fnSymbol](...args);  
      
    // 删除刚才添加的属性  
    delete context[fnSymbol];  
      
    // 返回调用结果  
    return result;  
};