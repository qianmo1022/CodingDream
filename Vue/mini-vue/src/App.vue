<template>
  <div>
    <p>{{age.num}}</p>
    <!-- <p>{{num}}</p> -->
    <button @click="() => age.num++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch, effect, watchEffect, ref } from 'vue'

const age = ref({num: 18})

console.log(age.value.num);



// const state = reactive({
//   count: 1,
//   msg: 2,
//   abc: 123
// })

// const age2 = ref(age)

// watchEffect(
//   () => {
//     console.log('watchEffect', state.count);
//   },
//   {
//     flush: 'post',
//     onTrack() {  // 调度函数
//       console.log('onTrack, 会在count收集依赖的环节被调用');
//     },
//     onTrigger() {  // 调度函数
//       console.log('onTrigger，会在count依赖触发的环节被调用');
//     }
//   }
// )

// const num = computed(() => {
//   return state.count * 10
// })

// watch(
//   () => state.count, 
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   },
//   {immediate: true}
// )

// effect(
//   () => { // 类似于生命周期，一开始就会执行
//     console.log('hello world', state.count);
//   }, 
//   { 
//     lazy: false,
//     scheduler: () => { // 当调度函数生效的时候，副作用函数就不再触发
//       console.log('调度器中的任务执行了');
//     }
//   }
// )


// const state2 = reactive(state)

</script>

<style lang="css" scoped>

</style>