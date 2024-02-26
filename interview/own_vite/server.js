const Koa = require('koa');
const fs = require('fs');

// 后端路由
const app = new Koa();
const path = require('path')

function rewriteImport(content) {
    // [0-9]
    // []代表正则匹配 |代表或者 [^]取非 ()分组 g代表全文 \n 换行结束
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
        // console.log(s0, s1);
        if (s1[0] !== '.' && s1[0] !== '/') {
            return ` from '/@modules/${s1}'`
        } else {
            return s0
        }
    })
}
// 后端路由
// 中间件 middleware  洋葱模型
app.use(async ctx => {
    // 如果 ' / '
    // 上下文请求 + 响应对象    
    const { request: { url,query } } = ctx

    if (url === '/') {
        // 设置响应头
        ctx.type = 'text/html';
        let content =  fs.readFileSync('./index.html','utf-8')
        ctx.body = content
    } else if (url.endsWith('.js')) {
        console.log(__dirname,url.slice(1));
        const p = path.resolve(__dirname, url.slice(1))// resolve 有用的物理地址
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p, 'utf-8')
        ctx.body = rewriteImport(content)

    }
})

app.listen(5173, () => {
  console.log('快来一起手写vite,拿下美团offer吧!');
});
