// [] == ![]
// true
// 所有对象转为布尔都是true 所以![]是false，所以[] == false，
// 然后[] == Number(false) => [] == 0 => valueOf([]) == 0 => '' == 0 => Number('') == 0 => 0 == 0 => true