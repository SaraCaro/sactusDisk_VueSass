<template>
    <cabecera/>
    <div class="detalle-volver">
        <router-link class="detalle-volver-item" to="/popVinilo"><i class="fa-solid fa-arrow-left"></i> Volver atrás</router-link>
    </div>
    <div class="detalle">
          <div class="detalle-img">
              <img class="detalle-img-item" src="../../../public/pop/justin.png" alt="justin"/>
          </div>
          <div class="detalle-text">
              <h1 class="detalle-text-title">Justice - Justin Bieber</h1>
              <h3 class="detalle-text-precio">19.99€</h3>
              <div class="detalle-text-input">
                  <label class="detalle-text-input-label" for="cantidad">Cantidad</label>
                  <input class="detalle-text-input-item" type="number" id="cantidad" name="cantidad" value="1" min="1"/>               
              </div>
              <div class="detalle-text-button">
                  <button class="detalle-text-button-item" @click="añadirCarrito">Añadir al carrito</button>
              </div>
          </div>      
      </div>
    <pie/>
</template>
    
<script>
import cabecera from "../cabecera.vue";
import pie from "../pie.vue";

export default {
name: "DetalleJustin",
components: {
    cabecera,
    pie,
},
methods: {
    añadirCarrito() {
      alert("Añadido al carrito");
    },
  },
};

</script>