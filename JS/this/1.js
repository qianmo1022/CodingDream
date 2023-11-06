// console.log(this);

// var a = 1

// console.log(window.a); //会报错,因为node中没有window对象

function identify () {
    return this.name.toUpperCase();
}

function speek () {
    var greeting = "Hello,I'm " + identify.call(this) + "."; 
    console.log(greeting);
}

var me = {
    name: "Tom"
}

var you = {
    name: "Jerry"
}
// console.log(identify(you))
speek.call(me)

