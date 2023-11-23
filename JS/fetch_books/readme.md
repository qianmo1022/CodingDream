# 全栈快速一览

- 前端 http 服务 html/css/js请求到本地，完成DOM树的渲染
    5500/5501 启用web服务
- 后端 接口服务
    在某个url上，返回json数据
    3000 端口
- 前后端分离
    json-server 快速地把后端数据server启动了
    - npm init -y 把项目变为后端项目
    - npm i json-server 给个json文件就可以启动数据服务
        db.json 快速地伪造数据
    - package.json
        script
        "dev": "json-server -w db.json"

- restful api 

    json-server遵守这个规则
    一切皆资源 url设计规则
    资源展示的方式，restful api 遵守的 
    GET（查） http://localhost:3000/posts
    GET http://localhost:3000/posts/:id
    CRUD 
    POST（增） http://localhost:3000/posts
    DELETE（删） http://localhost:3000/posts/3
    PATCH（部分改） http://localhost:3000/posts/1

    为第一篇文章的添加一条评论

    - 选择相应的请求方法 + 相关的资源路径 + 请求体（options）
    - 设计url + 选择方法

    GET /posts/:pid/comments/:cid