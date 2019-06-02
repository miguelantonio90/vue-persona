import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/persona/Index'
import Create from '@/components/persona/Create'
import Edit from '@/components/persona/Edit'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/person/list',
      name: 'Index',
      component: Index
    }, {
      path: '/person/create',
      name: 'Create',
      component: Create
    }, {
      path: '/person/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
