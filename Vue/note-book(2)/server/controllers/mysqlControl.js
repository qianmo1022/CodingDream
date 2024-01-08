// 和数据库连接的相关操作
const mysql = require('mysql2')
const config = require('../config')

// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 连接mysql
const allService = {
  query: function(sql, values) {
    // pool 连接
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          // 执行sql语句
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()  // 释放连接
          })
        }
      })
    })
  }
}


// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}
// 查询
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}
// 注册
const userRegister = (values) => { //  values == [username, password, nickname]
  let _sql = `insert into users set username=?,password=?,nickname=?;`
  return allService.query(_sql, values)
}

module.exports = {
  userLogin,
  userFind,
  userRegister
}