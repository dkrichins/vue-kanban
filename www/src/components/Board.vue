<template>
  <div class="board">
    <div class="container">
      <div class="row" v-for="list in lists">
        <div class="col-xs-4">
          <div class="well">
            <list :listProp="list"></list>
            <h1>Board Name: {{board.name}}</h1>
            <h2>Board description: {{board.description}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  import List from "./List"
  export default {
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', (this.$route.params.id)
      )
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      }
    },
    components: {
      List
    }
  }

</script>

<style scoped>

</style>