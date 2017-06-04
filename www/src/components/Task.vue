<template>
  <div class="task">
    <div class="container">
      <div class="row" v-for="comment in comments">
        <div class="col-xs-4">
          <div class="well">
            <comment :commentProp="comment"></comment>            
          </div>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
import Comment from './Comment'
export default {
  name: 'task',

  props: ['taskProp'],
 mounted(){
    this.$store.dispatch('getComments', this.taskProp)
  },  
  computed: {
    comments(){
      return this.$store.state.activeComments[this.taskProp._id]
    }
  },
  methods:{
  createComments(){
    this.$store.dispatch('createComments', {
      name: 'Testing comments creation',
      description: 'comments comments comments'
    })
  },
  removeComments(comments){
    this.$store.dispatch('removeComments', comments)
  }
  },
  components:{
    Comment
  }
}
  
</script>


<style scoped>

</style>