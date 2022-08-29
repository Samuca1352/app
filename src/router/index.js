import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: HomeView,
    meta: {
      requiresAuth: true,

    }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/products',
    name: 'products',
    component: () => import('../components/Products/AppProducts.vue'),
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/lotes',
    name: 'lotes',
    component: () => import('../views/LotesView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/parceiro',
    name: 'parceiro',
    component: () => import('../views/ParceirosView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/sangrias',
    name: 'Sangrias',
    component: () => import('../views/SangriasView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/propriedades/',
    name: 'Propriedades',
    component: () => import('../views/PropriedadesView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/propriedades/incluir',
    name: 'IncluirProp',
    component: () => import('../views/IncluirView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* const getCurrentUser =() =>{
  return new Promise((resolve,reject)=>{
    const removeListener= onAuthStateChanged(
      getAuth,
      (user)=>{
        removeListener();
        resolve(user);
      },
      reject
    )
  })
};


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if ( getCurrentUser()) {
      next();
    } else {
      alert("você não tem permissão para acessar essa página!");
      next("/")
    }
  } else {
    next();
  }
}); */

const getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
    (user)=>{
      removeListener();
      resolve(user);
    },
    reject)
  });
};

router.beforeEach(async (to,from, next)=>{
  if (to.matched.some((record)=> record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("voce não tem permissão pra acessar esta página!");
      next("/");
    }
  } else {
    next();
  }
});

export default router
