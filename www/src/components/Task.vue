<template>
    <div class="task">


    </div>
</template>


<script>
import Comment from './comment'
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


<style scoped lang="sass">

</style>