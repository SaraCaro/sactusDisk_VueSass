import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import '../css/styles.css'

import inicio from './components/inicio.vue'
import carrito from './components/sesion/carrito.vue'
import login from './components/sesion/login.vue'
import registro from './components/sesion/registro.vue'

import popVinilo from './components/paginasDiscos/popVinilo.vue'
import rockVinilo from './components/paginasDiscos/rockVinilo.vue'
import popDisco from './components/paginasDiscos/discoPop.vue'
import rockDisco from './components/paginasDiscos/discoRock.vue'
import rapDisco from './components/paginasDiscos/discoRap.vue'
import rapVinilo from './components/paginasDiscos/rapVinilo.vue'
import soulDisco from './components/paginasDiscos/discoSoul.vue'
import soulVinilo from './components/paginasDiscos/soulVinilo.vue'

import detalleHarry from './components/detalles/detalleHarry.vue'
import detalleMetallica from './components/detalles/detalleMetallica.vue'
import detalleJustin from './components/detalles/detalleJustin.vue'
import detalleQueen from './components/detalles/detalleQueen.vue'
import detalleKase from './components/detalles/detalleKase.vue'
import detalleNach from './components/detalles/detalleNach.vue'
import detalleRay from './components/detalles/detalleRay.vue'
import detalleAretha from './components/detalles/detalleAretha.vue'


const routes = [
    { path: '/', component: inicio, name: 'inicio' },
    { path: '/carrito', component: carrito, name: 'Carrito' },
    { path: '/login', component: login, name: 'login' },
    { path: '/registro', component: registro, name: 'registro' },

    { path: '/popVinilo', component: popVinilo, name: 'popVinilo' },
    { path: '/rockVinilo', component: rockVinilo, name: 'rockVinilo' },
    { path: '/popDisco', component: popDisco, name: 'popDisco' },
    { path: '/rockDisco', component: rockDisco, name: 'rockDisco' },
    { path: '/rapDisco', component: rapDisco, name: 'rapDisco' },
    { path: '/rapVinilo', component: rapVinilo, name: 'rapVinilo' },
    { path: '/soulDisco', component: soulDisco, name: 'soulDisco' },
    { path: '/soulVinilo', component: soulVinilo, name: 'soulVinilo' },

    { path: '/detalleHarry', component: detalleHarry, name: 'DetalleHarry'},
    { path: '/detalleMetallica', component: detalleMetallica, name: 'DetalleMetallica' },
    { path: '/detalleJustin', component: detalleJustin, name: 'DetalleJustin' },
    { path: '/detalleQueen', component: detalleQueen, name: 'DetalleQueen' },
    { path: '/detalleKase', component: detalleKase, name: 'DetalleKase' },
    { path: '/detalleNach', component: detalleNach, name: 'DetalleNach' },
    { path: '/detalleRay', component: detalleRay, name: 'DetalleRay' },
    { path: '/detalleAretha', component: detalleAretha, name: 'DetalleAretha' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

