import axios from 'axios'

const baseUrl = ''

export function get(url){
    return function(params={}){
        return axios.get(baseUrl+url,{
            params
        }).then(res => {
            const { errno,data } = res.data
            if(errno === 0){
                return data
            }
        })
    }
}

// export default get 
// export default 抛出的是函数,import 时不需要加{}
// 当export 抛出的是一个对象时，import 时需要加上{}，因为对象可以有多个属性，所以需要加{}

// let resFn = get('/seller')()
// resFn().then(data => {

// })