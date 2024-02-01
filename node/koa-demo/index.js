// 后端启动一个一直运行的服务，提供接口给前端请求
// 想办法提供多个不同的接口
const http = require('http');

const server = http.createServer((req, res) => {
    
    // 提供不同的接口地址
    if (req.url.startsWith('/home')) {
        res.end('Welcome to the home page');
    } else if (req.url.startsWith('/detail')) {
        res.end('Welcome to the detail');
    } else {
        res.end('Not Found');
    }
})

server.listen(3000,() => {
    console.log('server listening on port 3000')
})