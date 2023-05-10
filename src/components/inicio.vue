<template>
<cabecera/>

<!-- Carousel -->
  <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-item-posicion">
              <img class="carousel-item-img d-block" src="../../public/harryCarousel.jpg" alt="...">
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-posicion">
              <img class="carousel-item-img d-block" src="../../public/paramoreCarousel.jpg" alt="...">
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-item-posicion">
              <img class="carousel-item-img d-block" src="../../public/beyonceCarousel.jpg" alt="...">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
  </div>
  
<!-- Cards -->
  <div class="card-container">
    <div class="card">
      <img src="../../public/acdc.png" alt="Imagen 1" class="card-img"/>
      <h2 class="card-title">AC/DC</h2>
      <p class="card-text">12.99€</p>
    </div>
    
    <div class="card">
      <img src="../../public/bunny.png" alt="Imagen 1" class="card-img"/>
      <h2 class="card-title">Bad Bunny</h2>
      <p class="card-text">18.99€</p>
    </div>
    
    <div class="card">
      <img src="../../public/weekend.png" alt="Imagen 1" class="card-img"/>
      <h2 class="card-title">The Weekend</h2>
      <p class="card-text">30.99€</p>
    </div>
  </div>

<!-- Suscripcion -->
<div class="suscripcion">
  <div class="suscripcion-text">
      <p>¡Suscribete a nuestro newsletter y recibe las mejores ofertas!</p>
  </div>
  <div class="suscripcion-form">
      <form @submit.prevent="handleSubmit">
          <input class="suscripcion-form-input" type="email" placeholder="Ingresa tu email">
          <button class="suscripcion-form-boton" type="submit">Suscribirse</button>
      </form>
  </div>
</div>
<pie/>

</template>

<script>

import cabecera from './cabecera.vue'
import pie from './pie.vue'

export default {
    name: 'Inicio',
    components: {
        cabecera,
        pie
    },
    data() {
        return {
            email: ''
        }
    },
    methods: {
        handleSubmit() {
            alert('Gracias por suscribirte')
        }
    }
}

</script>