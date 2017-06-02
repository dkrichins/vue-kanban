<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4 first">
          <h2>Welcome to DustySue!</h2>
          <div class="row">
          <div class="col-xs-12 second">
          <form @submit.prevent="login">
            <div class="form-group">
              <input type="text" v-model="email" class="form-control" placeholder="Email" aria-describedby="sizing-addon1">
            </div>
            <div class="form-group">
              <input type="password" v-model="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon1">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg">Submit</button>
            </div>
          </form>
          <p>Don't have an account?
            <router-link to='/register'> Create an account</router-link>
          </p>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        email: "",
        password: "",
      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch.login({ email: this.email, password: this.password })
      }
    },
    components: {}
  }

</script>


<style scoped>
  .form-group {
    width: 50%;
  }

  .first{

    background: blue;
  }
  .second{

    text-align: center;

  }
</style>