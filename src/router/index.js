import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import edit from '@/components/edit'
import detail from '@/components/detail'
import category from '@/components/category'
import about from '@/components/about'
import favor from '@/components/favorite'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
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
    {
      path: '/favor',
      name: 'favor',
      component: favor
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})
