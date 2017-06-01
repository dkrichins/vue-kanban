<template>
  <div class="board"> 
    
    Board name: {{board.name}}
    Board description: {{board.description}}  
    <!--<list v-for="list in lists" :listProp = list></list>-->
  </div>
</template>

<script>
import List from "./List"
export default {
  name: 'board',
  mounted(){
    this.$root.$data.store.actions.getBoard(this.$route.params.id)
  },
  computed:{
    board(){
      return this.$root.$data.store.state.activeBoard
    } 
  },
  components: {
    List
  }
}
</script>

<style scoped>

</style>
