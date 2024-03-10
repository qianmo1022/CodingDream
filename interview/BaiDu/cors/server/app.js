// const Koa = require('koa');
// const app = new Koa();

// const main = (ctx, next) => {
//     ctx.body = 'Hello World';
// }

// app.use(main);
// app.listen(3000, () => {
//   console.log('jsonp is starting at port 3000');
// });

const http = require('http');

const server = http.createServer((req,res) => {
    // 跨域是浏览器不接受后端的响应
    // 想个办法让浏览器接受
    res.writeHead(200, {
        // 'Access-Control-Allow-Origin': '*' // 白名单
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' // 白名单
    })

    let data = {
        msg: 'Hello CORS!'
    }

    res.end(JSON.stringify(data));// 向前端返回数据
})

server.listen(3000, () => {
    console.log('cors is starting at port 3000');
})