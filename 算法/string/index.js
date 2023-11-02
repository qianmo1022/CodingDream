// let str = 'abcdefg'

// // console.log(str.charAt(1));//也可以通过字符串自带的方法charAt()来访问
// // console.log(str[1]);//通过下标访问，字符串可以通过下标访问但是不能修改

// // console.log(str.concat('hijk'));//concat()方法用于连接两个或多个字符串,并返回新的字符串
// // str += 'hijk';//字符串拼接

// // str.slice(1, 3);//slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分

// let arr = str.split('');//split()方法用于把一个字符串分割成字符串数组,括号内为分割的标志
// arr.splice(4)//splice()方法向/从数组中添加/删除项目，然后返回被删除的项目
// console.log(arr);//[ 'a', 'b', 'c', 'd' ]
// let newArr = arr.join('/');//join()方法用于把数组中的所有元素放入一个字符串,括号内为分割的标志
// console.log(newArr);

// let str = '2023年10月31日'
// console.log(str.split('年').join('/').split('月').join('/').split('日').join(''));//2023/10/31

// const str = 'juejin'
// const res = str.split('').reverse().join('')
// console.log(res);

const str = 'yesey'

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }
// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) return false
//         left++;
//         right--;
//     }
//     return true
// }

// function isPalindrome(str){
//     const stack = [];
//     for(let i = 0; i < str.length; i++){
//         stack.push(str[i])
//     }

//     for(let i = 0; i < str.length; i++){
//         if(stack.pop() !== str[i]) 
//         return false
//     }
//     return true
// }

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) return false
    }
    return true
}

