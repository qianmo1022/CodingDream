const Koa = require('koa');

const app = new Koa();

const main = (ctx) => { // 只要被app use掉的函数一定具有ctx参数 ctx == koa
    // ctx.body = {
    //     msg: 'hello world'
    // }
    if (ctx.url.startsWith('/home')) {
        ctx.response.type = 'json'
        ctx.body = '<h2>Welcome to the home page</h2>';
    } else if (ctx.url.startsWith('/detail')) {
        ctx.body = 'Welcome to the detail';
    } else {
        ctx.body = 'Not Found';
    }
}
app.use(main);

app.listen(3000, () => {
    console.log('项目运行在3000端口')
})