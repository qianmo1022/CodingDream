<template>
  <v-header/>
  <router-view/>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default{
  components:{
    'v-header':Header
  }
}
</script>

<style lang="less">

</style>
