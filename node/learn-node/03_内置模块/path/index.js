const path = require('path');

// console.log(path.join('a','b','c'));
// console.log(path.join(process.cwd(),'models','index'));

// console.log(path.resolve('a','b','c'));

// process.cwd()// 返回当前工作目录的路径
// console.log(path.dirname(process.cwd()))// 返回路径的目录名
// console.log(path.dirname('a/b/c'))// 返回路径的目录名

// console.log(path.basename('a/b/c.js'))// 返回路径的最后一部分;
// console.log(path.basename(__filename),'.js');// 返回文件名，后一个参数代表删除的后缀

// console.log(path.extname(__filename));// 读取文件后缀，用于判断文件类型

// console.log(path.normalize(__filename));// 将路径格式化成标准的路径，规范化路径，解析路径中的.和..，并且将多个斜杠转换成一个斜杠

// console.log(path.parse(__filename));// 将路径转换成对象

console.log('foo\\bar\\baz'.split(path.sep));// 将路径转换成数组
