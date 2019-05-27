import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Create from '@/components/Create'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/create',
      name: 'Create',
      component: Create
    }, {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
