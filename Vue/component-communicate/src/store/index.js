import { createStore } from "vuex"

const store = createStore({
    state(){ //data公共数据源
        return {
            lists: ['html','css','js']
        }
    },
    mutations: {// methods 修改state的唯一方式
        listsAdd(state,val){
            state.lists.push(val)
        }
    }
})

export default store