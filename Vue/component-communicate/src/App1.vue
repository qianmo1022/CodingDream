<template>
    <div>
        <div class="head">
            <input type="text" name="" v-model="message">
            <button @click="submit">确定</button>
        </div>
        <List :lists="lists"/>
    </div>
</template>
  
<script>
import List from './components/body1/List.vue'
export default {
    components: {
        List
    },
    data() {
        return {
            lists: ['html', 'css'],
            message: ''
        }
    },
    watch:{
        lists(newVal){
            console.log(newVal)
        }
    },
    methods: {
        submit() {
            if (this.message === '') return
            this.lists.push(this.message)
            this.message = ''
        }
    }
}
</script>
  
<style lang="css" scoped></style>