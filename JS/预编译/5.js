// GO:{
//     global: undefined -> 100
//     fn: function fn() {}
// }

global = 100
function fn() {
    console.log(global);//undefined
    global = 200
    console.log(global);//200
    var global = 300
}
fn()

// AO: {
//     global: undefined -> 200 -> 300
//}

var global;