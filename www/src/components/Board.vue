<template>
  <div class="board">
    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <form @submit.prevent="createList">
          <div class="form-group">
            <input type="text" class="form-control" v-model="name" placeholder="List Name" required>
          </div>
          <div class="form-group">
            <textarea rows="4" cols="50" class="form-control" v-model="description" placeholder="Description"></textarea>
          </div>
            <button class="btn btn-primary" type="submit">Create List</button>
        </form>
        </div>
      </div>
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
    data() {
    return {
      name: '',
      description: '',
      boardId: this.$route.params.id
    }
  },
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
    },
    methods: {
      createList(){
        this.$store.dispatch('createList', {name: this.name, description: this.description, boardId: this.boardId})
      },
      removeBoard(board){
        this.$store.dispatch('removeBoard', board)
      }
    }
  }

</script>

<style scoped>

</style>