function foo () {
    var a = 1

    var bar =

    setTimeout(function() {
        console.log(this.a);
    },1000)
}