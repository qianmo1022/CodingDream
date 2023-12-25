const fs = require('fs')

// const info = fs.readdirSync('./test')
// console.log(info)

// fs.mkdirSync('./test-dir',{recursive:true})
// fs.rmdirSync('./test-dir',{recursive:true})

fs.watch('./',{recursive:true},(eventType,filename) => {
    console.log(`当前文件夹下${filename}文件变更为${eventType}事件`);
})