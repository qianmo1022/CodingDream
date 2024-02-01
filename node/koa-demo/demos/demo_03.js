const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const main = (ctx) => { // 只要被app use掉的函数一定具有ctx参数 ctx == koa
    if (ctx.url.startsWith('/user')) {
        const data = fs.readFileSync('./data.json','utf-8')
        ctx.body = data
    } else if (ctx.url.startsWith('/home')) {
        ctx.response.type = 'application/json'
        const page = fs.readFileSync('./template.html','utf-8')
        ctx.body = page
    }
}
app.use(main);

app.listen(3000, () => {
    console.log('项目运行在3000端口')
})