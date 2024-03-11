const http = require('http');

const server = http.createServer((req,res) => {

    let data = {
        msg: 'Hello node-proxy!'
    }

    res.end(JSON.stringify(data));// 向前端返回数据
})

server.listen(3000, () => {
    console.log('cors is starting at port 3000');
})