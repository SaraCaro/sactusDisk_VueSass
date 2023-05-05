import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import '../css/styles.css'

import inicio from './components/inicio.vue'
import carrito from './components/carrito.vue'
import login from './components/login.vue'
import registro from './components/registro.vue'
import popVinilo from './components/popVinilo.vue'
import rockVinilo from './components/rockVinilo.vue'
import popDisco from './components/discoPop.vue'
import rockDisco from './components/discoRock.vue'
import detalleHarry from './components/detalleHarry.vue'
import detalleMetallica from './components/detalleMetallica.vue'
import detalleJustin from './components/detalleJustin.vue'
import detalleQueen from './components/detalleQueen.vue'

const routes = [
    { path: '/', component: inicio, name: 'inicio' },
    { path: '/carrito', component: carrito, name: 'Carrito' },
    { path: '/login', component: login, name: 'login' },
    { path: '/registro', component: registro, name: 'registro' },
    { path: '/popVinilo', component: popVinilo, name: 'popVinilo' },
    { path: '/rockVinilo', component: rockVinilo, name: 'rockVinilo' },
    { path: '/popDisco', component: popDisco, name: 'popDisco' },
    { path: '/rockDisco', component: rockDisco, name: 'rockDisco' },
    { path: '/detalleHarry', component: detalleHarry, name: 'DetalleHarry' },
    { path: '/detalleMetallica', component: detalleMetallica, name: 'DetalleMetallica' },
    { path: '/detalleJustin', component: detalleJustin, name: 'DetalleJustin' },
    { path: '/detalleQueen', component: detalleQueen, name: 'DetalleQueen' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

