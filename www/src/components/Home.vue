<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ad3d0c8a4961cfc89fb4a983af2c7682b7980ebd
  <div class="home">
    <div class="navbar">
      <div class="container">
        <div class="row">
<<<<<<< HEAD
          <div class="col-sm-12">
            <ul class="list-inline">
              <li class="">
                <router-link class="btn" to="/register"><button type="button" class="btn">Register</button></router-link>
              </li>
              <li class="">
                <router-link class="btn" to="/login"><button type="button" class="btn">Login</button></router-link>
              </li>
            </ul>
          </div>
=======
          <div class="col-xs-12 first">  
             <h1>DustySue Kanban</h1>             
          </div>         
          <div class="col-xs-1 col-xs-offset-5">
            <router-link class="btn" to="/register"><button type="button" class="btn">Register</button></router-link>
          </div>
          <div class="col-xs-1">
            <router-link class="btn" to="/login"><button type="button" class="btn">Login</button></router-link>
          </div>         
=======

  <div class="navbar">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <ul class="list-inline">
            <li class="">
              <router-link class="btn" to="/register"><button type="button" class="btn">Register</button></router-link>
            </li>
            <li class="">
<<<<<<< HEAD
              <router-link class="btn" to="/login">Login</router-link>
=======
              <router-link class="btn" to="/login"><button type="button" class="btn">Login</button></router-link>
>>>>>>> b4846a51d8a254ed2f9ddb05012ca86fa6b99555
            </li>
          </ul>
>>>>>>> 02ff296ba954272412d4504fc1a8af6dc934d7d6
>>>>>>> ad3d0c8a4961cfc89fb4a983af2c7682b7980ebd
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
<<<<<<< HEAD
    color: blue;
=======
    color: white;
>>>>>>> ad3d0c8a4961cfc89fb4a983af2c7682b7980ebd
    text-align: left;
  }

  p {
    text-align: left;
<<<<<<< HEAD
    color: black;
=======
    color: white;
>>>>>>> ad3d0c8a4961cfc89fb4a983af2c7682b7980ebd
  }

  button {
    margin-left: 0
  }

  img {
    margin-top: -70px;
  }
<<<<<<< HEAD
=======
  .first{
    background: silver;
    opacity: .6;

  }
>>>>>>> ad3d0c8a4961cfc89fb4a983af2c7682b7980ebd
  
</style>