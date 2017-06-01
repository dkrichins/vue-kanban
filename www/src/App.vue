<template>
  <div id="app">
    <error></error>
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  components:{
    Error
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app {
  background: url("https://static.pexels.com/photos/348323/pexels-photo-348323.jpeg") no-repeat center center fixed;
  background-size: cover;
  height: 900px; 
}
</style>
