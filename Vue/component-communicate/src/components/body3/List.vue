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

    computed:{
        lists(){
            let list = ['html', 'css']
            if(!this.msg) return
            list.push(this.msg)
            return list
        }
    }
    data() {
        return {
            lists: ['html', 'css'],
            message: 'js'
        }
    },
    
}
</script>

<style lang="css" scoped></style>