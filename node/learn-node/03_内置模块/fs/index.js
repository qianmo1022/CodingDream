// 文件系统
// const fs = require('fs');

// // 同步
// const syncData = fs.readFileSync('./data.txt',{encoding:'utf8'})// '-sync'同步，没有'-sync'则为异步
// console.log(syncData);

// //异步
// fs.readFile('./data.txt',{encoding:'utf8'},(err,res)=>{
//     if (!err) {
//         console.log(res);
//     }
// })

// fs.promises.readFile('./data.txt','utf-8').then(res=>{
//     console.log(res);
// })

const fs = require('fs/promises');
fs.readFile('./data.txt',{encoding:'utf8'}).then(res=>{
    console.log(res);
})