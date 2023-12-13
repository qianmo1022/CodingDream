Function.prototype.myBind = function (context,...args) {
    // this指向函数本身,this由离它最近的函数决定，箭头函数没有this，this由上一层的this决定
    // 函数 this
    // console.log(typeof this);
    if (typeof this !== "function") {
        throw new TypeError("Error")
    }
    // this()
    context = context || window//位于闭包中，this指向window
    let that = this
    return function fn(...innerArgs) {
        // this // 此处的this和上面的this不是同一个this，this丢失，需要保存
        if (this instanceof fn) {// new 的方式来运行
              
            
        }
        return that.apply(context, [...args,...innerArgs]) // 原先的函数执行，this手动指定为context
        // 原先的函数执行，this手动指定为context
    }
}

function sayHello(x, y, z) {
    console.log("函数中的",this);
    console.log("你好:",this.name);
    console.log(x + y + z);
}
const arrowFn = () => { }//this}

let person = {
    name: "张三",
}

// const f2 = arrowFn.myBind
// f2()//this指向window
let bindFn = sayHello.myBind(person, 1, 2);
//将sayHello函数的this绑定到person对象上，并将参数1和2预设到sayHello函数中
console.log(bindFn(3));