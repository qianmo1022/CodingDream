console.log('start');

setTimeout(() => {
    console.log('Timeout1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise1');
    setTimeout(() => {
        console.log('Timeout2');
    }, 0);
}).then(() => {
    console.log('Promise2');
});

setTimeout(() => {
    console.log('Timeout3');
}, 0);

console.log('end');
