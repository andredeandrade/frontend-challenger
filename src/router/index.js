import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Template/Layout'

import List from '@/views/List'
import Detail from '@/views/Detail'
import Edit from '@/views/Edit'
import Add from '@/views/Add'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Layout, 
    props: true,
    children: [
      {
        path: '',
        component: List
      },
      {
        path: '/detail/:id',
        component: Detail,
        props: true
      },
      {
        path: '/edit/:id',
        component: Edit,
        props: true
      },
      {
        path: '/add',
        component: Add
      }
    ]
  }]
})