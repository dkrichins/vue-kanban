<template>
  <div class="list">
    <div class="container">
      <div class="row" v-for="task in tasks">
        <div class="col-xs-4">
          <div class="well">
            <task :taskProp="task"></task>
            
          </div>
        </div>
      </div>
    </div>
        <!--<task v-for="task in tasks" :taskProp = task></task>-->
       
  </div>
</template>


<script>
import Task from "./Task"
export default {
    name: 'list',
    data(){

    },
    props: ['listProp'],
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>