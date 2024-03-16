// Function.prototype.myBind = function(context, ...args) {  
//     if(typeof this !== 'function'){
//         throw new TypeError('Error')
//     }
//     // 保存this
//     const self = this;
//     // 返回一个函数
//     return function F() {
//         // 因为返回了一个函数，我们可以 new F()，所以需要判断
//         if(this instanceof F){
//             return new self(...args, ...arguments);
//         }
//         return self.apply(context, args.concat(...arguments));
//     }
// }

Function.prototype.myBind = function(context,...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }

    context = context ? Object(context) : window

    const fn = this

    return function (...innerArgs) {
        ArrayArgs = args.concat(innerArgs)

        return fn.apply(context,ArrayArgs)
    }
}