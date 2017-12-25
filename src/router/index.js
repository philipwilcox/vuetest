import Vue from 'vue'
import Router from 'vue-router'
import HelloPhil from '@/components/HelloPhil'
// TODO: How do I get this stuff on the right side of "from" to autocomplete?

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloPhil',
      component: HelloPhil
    }
  ]
})
