<template>
    <cabecera/>
    <div class="carrito">
        <h1 class="carrito-title">Carrito</h1>
        <div class="carrito-productos">
            <div v-for="(producto, index) in productos" :key="index" class="carrito-productos-producto">
                <img :src="producto.imagen" alt="" class="carrito-productos-producto-img">
                <div class="carrito-productos-producto-info">
                    <h3 class="carrito-productos-producto-info-titulo">{{ producto.titulo }}</h3>
                    <p class="carrito-productos-producto-info-precio">Precio: {{ producto.precio }} €</p>
                    <button @click="eliminarProducto(index)" class="carrito-productos-producto-info-boton">Eliminar</button>
                </div>
            </div>
        </div>
        <div class="carrito-total">
            <h4 class="carrito-total-titulo">Total: {{ calcularTotal }} €</h4>
        </div>
    </div>

    <pie/>
  </template>
  
  <script>
     import cabecera from './cabecera.vue';
  import pie from './pie.vue';

  export default {
    name: 'carrito',
    components: {
      cabecera,
      pie
    },
    data() {
      return {
        productos: [
          {
            imagen: '../../public/pop/kehlani.png',
            titulo: 'Kehlani',
            precio: 18.99
          },
          {
            imagen: '../../public/rock/dire.png',
            titulo: 'Dire Straits',
            precio: 34.99
          },
          {
            imagen: '../../public/rock/pink.png',
            titulo: 'Pink Floyd',
            precio: 15.99
          }
        ],
      }
    },
    computed: {
      calcularTotal() {
        return this.productos.reduce((total, producto) => {
          return total + producto.precio;
        }, 0);
      }
    },
    methods: {
      eliminarProducto(index) {
        this.productos.splice(index, 1);
      }
    }
  }

  </script>