// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pruebacard from '../views/Pruebacard.vue'
import MunecodeNieve from '../views/MunecodeNieve.vue'
import Reno from '../views/Reno.vue'
import Pingu from '../views/Pingu.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/munecodenieve',
    name: 'MunecodeNieve',
    component: MunecodeNieve
  },
  {
    path: '/reno',
    name: 'reno',
    component: Reno
  },
  {
    path: '/pruebacard',
    name: 'pruebacard',
    component: Pruebacard
  },
  {
    path: '/pingu', 
    name: 'Pingu',
    component: Pingu
  },
]

/*const router = new VueRouter({
  routes
})
  

ESTE CÓDIGO ES EL ANTIGUO, EL SIGUIENTE SON PRUEBAS HASTA export default router*/

/*EMPIEZA AQUÍ EL CÓDIGO DE PRUEBA*/
const router = new VueRouter({
  mode: "history",
  base: '/mqm/', /*nombre de la carpeta donde se dirigirá github */
  routes
})
/*HASTA AQUÍ EL CÓDIGO DE PRUEBA*/

export default router
