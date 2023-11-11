// let str = 'abcdefg';

// console.log(str[2]); // c
// console.log(str.at(2)); // c

// console.log(str.startsWith('ab')); // true

// console.log(str.padStart(20,'012'));

let obj = {
    a: 1,
    b: 2
}


// console.log(obj);
// console.log(JSON.stringify(obj));

let str = JSON.stringify(obj);

console.log(JSON.parse(str));