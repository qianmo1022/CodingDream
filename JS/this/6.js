// function foo () {}

var a = 1

var bar = function () {
    console.log(this.a);
}
bar()

var baz = () => {
    console.log(this.a);
}// 箭头函数没有this，所以this指向的是外一层的this
baz()

var obj = {
    name:'TOM',
    show: function () {
        // console.log(this.name);

        var bar = () => {
            console.log(this.name);
        }
        bar()
    } 
}
obj.show()