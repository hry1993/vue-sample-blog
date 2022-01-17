import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogEdit from '@/components/BlogEdit'
import BlogCreate from '@/components/BlogCreate'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/create/blog/',
      name: 'BlogCreate',
      component: BlogCreate
    },
    {
      path: '/blog/:slug',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/edit/blog/:slug',
      name: 'BlogEdit',
      component: BlogEdit
    }
  ]
})
