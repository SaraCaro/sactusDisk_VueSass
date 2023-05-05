<template>
  <cabecera/>
  <div class="detalle">
        <div class="detalle-img">
            <img class="detalle-img-item" src="../../public/pop/discoHarry.png" alt="harry"/>
        </div>
        <div class="detalle-text">
            <h1 class="detalle-text-title">Harry's House - Harry Styles</h1>
            <h3 class="detalle-text-precio">14.99€</h3>
            <div class="detalle-text-input">
                <label class="detalle-text-input-label" for="cantidad">Cantidad</label>
                <input class="detalle-text-input-item" type="number" id="cantidad" name="cantidad" value="1" min="1"/>               
            </div>
            <div class="detalle-text-button">
                <button class="detalle-text-button-item">Añadir al carrito</button>
            </div>
        </div>      
    </div>
  <pie/>

  </template>
  
<script>
import cabecera from "./cabecera.vue";
import pie from "./pie.vue";

export default {
  name: "DetalleHarry",
  components: {
    cabecera,
    pie,
  },
};

</script>