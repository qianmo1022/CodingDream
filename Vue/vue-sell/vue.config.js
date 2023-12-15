const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{//配置代理
    proxy:{
      '/api':{
        target:'http://ustbhuangyi.com/sell/',
        changeOrigin:true,
        pathRewrite:{//路径重写
          '^/api': '/api'
        }
      }
    }
  }
})
