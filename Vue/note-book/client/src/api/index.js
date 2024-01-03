import axios from 'axios'
import { showSuccessToast, showFailToast } from 'vant';// 引入vant的toast提示框

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截


// 响应拦截
axios.interceptors.response.use(res => {
    if (res.status !== 200) {// 程序错误
        showFailToast('服务端异常')
    } else {
        if (res.data.code !== 8000) { //逻辑性错误
            showFailToast(res.data.msg)
            return res
        } else{
            return res.data
        }
    }
})

export default axios