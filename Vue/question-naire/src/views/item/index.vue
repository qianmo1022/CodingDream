<template>
  <div>
    <ItemContainer parent-component="item" />
  </div>
</template>

<script>
  import ItemContainer from '@/components/ItemContainer.vue'
  import { mapActions } from 'vuex'
  export default {
    components: {
      ItemContainer
    },
    created() {
      this.getquestionListAction()
    },
    methods: {
      ...mapActions(['getquestionListAction'])
    }
  }
</script>

<style lang="less" scoped>

</style>