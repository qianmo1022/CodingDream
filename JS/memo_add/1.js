// 永远不要相信用户的输入，所以要做校验
function add(a,b) {
    // ...代表参数？
    if(arguments.length !== 2) {
        throw new Error('参数有误');
    }
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('参数类型有误,请传入数字');
    }
    return a+b;
}

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
//记忆功能
const memoizeAdd = memoize(add);
memoizeAdd(1,2);
memoizeAdd(2,1);


// js不严格 编译阶段
// try {
//     add()
// } catch(err) {
//     console.log(err)
// }
// console.log('111');

// try{
//     console.log(add(1,2));

// } catch(err) {
//     console.log(err);
// }