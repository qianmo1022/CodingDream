function a() {
    console.log('hello world');
  }
  
  function copy(fn) {
  
    let foo = fn.toString();
    // console.log(new Function(fn));
    return new Function(`return ${foo}`).call(fn)
  
    // (function() {
    //   return function a() {
    //     console.log('hello world');
    //   }
    // })()
  
  } 
  let foo = copy(a)
  foo()