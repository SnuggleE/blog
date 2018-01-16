import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import edit from '@/components/edit'
import detail from '@/components/detail'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: detail
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: category
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: edit
    },
  ]
})
