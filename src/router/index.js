import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Grid from '@/components/Grid'
import MultiSelect from '@/components/MultiSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/multi',
      name: 'MultiSelect',
      component: MultiSelect
    },


  ]
})
