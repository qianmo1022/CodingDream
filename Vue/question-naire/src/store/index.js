import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state(){//存放数据，相当于全局的data
    return {
      questionList: [],
      itemNum: 1,//题目的索引
      answerId: []//存放答案的id
    }
  },
  getters: {//相当于computed
    rightAnswer(state) {
      let arr = []
      for(let question of state.questionList){
        for(let answer of question.topic_answer){
          if(answer.is_standard_answer == 1){
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: {//相当于methods(同步)，可以访问state
    getquestionList(state, list){
      state.questionList = list
    },
    recordAnswer(state,id) {
      state.answerId.push(id)
    },
    nextItem(state) {
      state.itemNum += 1
    }
  },
  actions: {//相当于async methods(异步),访问不了state
    getquestionListAction(context){ //context相当于store
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
        .then(res => {
          console.log(res);
          // 触发mutations中的getquestionList
          context.commit('getquestionList', res.data)
        })
    },
    recordAnswerAction({commit,state},id){
      commit('recordAnswer',id)
      if (state.itemNum < state.questionList.length) {
        commit('nextItem')
      }
    }
  },
  modules: {//相当于components
  }
})
