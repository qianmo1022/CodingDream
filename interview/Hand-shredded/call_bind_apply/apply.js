Function.prototype.myApply = function(context, argsArray) {  
    // 如果context不是对象或者函数，则转换为对象  
    context = context ? Object(context) : window;  
      
    // 给context添加一个唯一标识的属性，属性值为当前函数  
    const fnSymbol = Symbol('fn');  
    context[fnSymbol] = this;  
      
    // 判断argsArray是否是数组或类似数组对象，如果不是则转为数组  
    let args = Array.isArray(argsArray) ? argsArray : [...argsArray];  
      
    // 使用context调用这个方法，并传入参数  
    const result = context[fnSymbol](...args);  
      
    // 删除刚才添加的属性  
    delete context[fnSymbol];  
      
    // 返回调用结果  
    return result;  
};