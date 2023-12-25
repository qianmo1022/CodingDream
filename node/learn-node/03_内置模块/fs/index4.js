const fs = require('fs')

fs.appendFileSync('./data.txt','疑是地上霜')//追加内容
// fs.renameSync('./data.txt','./data.md')
// fs.renameSync('./data.md','./pic/data.md')

// fs.unlinkSync('./pic/data.md')//删除文件
// fs.rmSync('./pic',{recursive:true})//删除文件夹