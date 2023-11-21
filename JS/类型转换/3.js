// 一元运算符
// 一元运算符只能操作一个值的运算符。比如取反运算符!、自增运算符++、自减运算符--等，都是一元运算符。
// +'1'//1
// +[]//valueof([]) => '',+'' => Number('') => 0,即为0
// +{}//valueof({}) => {},({}).toString() => '[object Object]',+'[object Object]' => + Number('[object Object]') => NaN
// +[1,2,3]//valueof([1,2,3]) => [1,2,3],([1,2,3]).toString() => '1,2,3',+'1,2,3' => NaN

// 二元运算符
// console.log(1+'1');//'11',
// console.log(1+null);//1,Number(null) => 0,1+0 => 1
// console.log([] + []);//'',[].toString() => '',''+'' => ''
// console.log([] + {});//'[object Object]',[].toString() => '',''+{} => '[object Object]'
// console.log({} + {});//'[object Object][object Object]',{}.toString() => '[object Object]',''[object Object]'' => '[object Object][object Object]'