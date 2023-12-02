// 记忆函数，闭包的高级功能
function memoize(fn){
    if(typeof fn !== 'function') {
        throw new Error('参数类型有误,请传入函数');
    }
    const cache = {};//key:value O(1) 空间换时间

    return function() {
        // 唯一性   2 1,2  2,1 
        var key = arguments.length + Array.prototype.join.call(arguments,',');//将参数转化为字符串，以逗号分隔，拼接起来，作为key
        console.log(key);
        if (key in cache) {
            return cache[key];
        } else{
            return cache[key] = fn.apply(this,arguments);
        }
    }
}

// commonjs 模块化方案
//导出一个函数
module.exports = memoize;