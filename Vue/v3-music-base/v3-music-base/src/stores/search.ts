import { get } from 'lodash'
import { getSearchSuggest } from '@/api/index'
import { defineStore } from 'pinia'
import type { SearchSuggest } from '@/models/search'

export const useSearchStore = defineStore('search',{
    state:() =>{
        return{
            showSearchView:false,
            searchKeyWord:'',
            suggestData: {} as SearchSuggest,// singer,album,song...
        }
    },
    getters:{
        showHot: state => state.searchKeyWord === ''
    },
    actions:{
        async suggest(){
            // 和 ref 不一样 proxy
            this.suggestData = await getSearchSuggest(this.searchKeyWord)
        }
    },
})
