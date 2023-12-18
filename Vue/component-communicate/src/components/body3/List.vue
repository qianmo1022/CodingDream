<template>
    <div class="body">
        <ul>
            <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    // watch: {
    //     msg(newVal) {
    //         this.lists.push(newVal)
    //     }
    // },

    // lists计算属性依赖于msg，每次msg变化，lists都会重新计算，所以无法实现持续添加li结构
    computed:{
        lists(){
            let list = ['html', 'css']
            if(this.msg){
                list.push(this.msg)
            }
            return list
        }
    },
    data() {
        return {
            // lists: ['html', 'css']
        }
    }
    
}
</script>

<style lang="css" scoped></style>