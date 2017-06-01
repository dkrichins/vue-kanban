
import Vue from 'vue'
import Router from 'vue-router'
import Boards from 'components/Boards'
import Board from 'components/Board'
import Home from 'components/Home'
import Login from 'components/Login'
import Register from 'components/Register'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/boards/:id',
      name: 'Board',
      component: Board
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})