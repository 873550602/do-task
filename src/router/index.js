import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import SignIn from '@/views/signIn'
import Inbox from '@/views/inbox'
import All from '@/views/all'
import Today from '@/views/today'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[{
      	path:'/inbox',
      	name:'inbox',
      	component:Inbox,
      },{
      	path:'/all',
      	name:'all',
      	component:All,
      },{
      	path:'/today',
      	name:'today',
      	component:Today,
      },{
      	path:'',
      	redirect:'/inbox',
      }]
    },{
    	path:'/signIn',
    	name:'signIn',
    	component:SignIn
    }
  ]
})
