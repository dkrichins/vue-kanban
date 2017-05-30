<template>
  <div> 
    Active Board: {{board}}
    <!--<list-component v-for="list in lists" :list = list></list-component>-->
  </div>
</template>

<script>
export default {
  name: 'board',
  mounted(){
    this.$root.$data.store.actions.getBoard(this.$route.params.id)
  },
  computed:{
    board(){
      return this.$root.$data.store.state.activeBoard
    } 
  }
}
</script>

<style scoped>

</style>
