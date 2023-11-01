function a() {
    function b() {
        var bbb = 234;
        console.log(aaa);
    }

    var aaa = 123;
    return b;
}

var c = a()
c()//输出123