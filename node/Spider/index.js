const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://movie.douban.com/top250',(res) => {
    let html = ''

    res.on('data',(chunk) => {//监听数据的读取
        // console.log(chunk.toString('utf-8'));//Buffer转字符串
        html += chunk.toString('utf-8')
    })

    res.on('end',() => {//监听数据读取完成
        const $ = cheerio.load(html)
        const result = []

        $('li .item').each(function() {  
            const title = $('.info .title',this).text()
            const star = $('.info .bd .rating_num',this).text()
            const pic = $('.pic img',this).attr('src')
            result.push (
                {
                    title,
                    star,
                    pic
                }
            )

            console.log(result)
        })

        // console.log(result);
        fs.writeFile('./list.json',JSON.stringify(result),(err,data) => {
            if (err) {
                throw err
            }
            console.log('文件写入成功')
        })

    })

})