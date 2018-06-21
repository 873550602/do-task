import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import SignIn from '@/views/signIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
    	path:'/signIn',
    	name:'signIn',
    	component:SignIn
    }
  ]
})
