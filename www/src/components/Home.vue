<template>
  <div class="home">
    <div class="navbar">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 first">  
             <h1>DustySue Kanban</h1>             
          </div>         
          <div class="col-xs-1 col-xs-offset-5">
            <router-link class="btn" to="/register"><button type="button" class="btn">Register</button></router-link>
          </div>
          <div class="col-xs-1">
            <router-link class="btn" to="/login"><button type="button" class="btn">Login</button></router-link>
          </div>         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  .list-inline li {
    display: inline-block;
    margin: 0 3px;
  }

  li {
    color: white;
  }

  .logo {
    color: white;
    font-size: 40px;
  }

  h2 {
    margin-top: 100px;
    color: white;
    font-weight: 900;
    text-align: left;
  }

  h5 {
    margin-top: 20px;
    color: white;
    text-align: left;
  }

  p {
    text-align: left;
    color: white;
  }

  button {
    margin-left: 0
  }

  img {
    margin-top: -70px;
  }
  .first{
    background: silver;
    opacity: .6;

  }
  
</style>