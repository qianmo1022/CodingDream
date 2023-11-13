function a() {
    function b() {
        var bbb = 234;
        console.log(aaa);
    }

    var aaa = 123;
    return b;
}//形成闭包，闭包中的内容为b，b中的内容为bbb和aaa，aaa为123，bbb为234

var c = a()
c()//输出123