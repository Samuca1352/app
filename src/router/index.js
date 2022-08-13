import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicos',
    name:'servicos',
    component:()=> import('../views/ServicesView.vue')
  },

  {
    path: '/products',
    name:'products',
    component:()=> import('../components/Products/AppProducts.vue')
  },

  {  path: '/lotes',
  name:'lotes',
  component:()=> import('../views/LotesView.vue')
},
{  path: '/parceiro',
name:'parceiro',
component:()=> import('../views/ParceirosView.vue')
},
{  path: '/sangrias',
name:'Sangrias',
component:()=> import('../views/SangriasView.vue')
},
{  path: '/propriedades',
name:'Propriedades',
component:()=> import('../views/PropriedadesView.vue')
},



  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
