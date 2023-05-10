<template>
  <cabecera/>
  <div class="search">
    <div class="search-container">
      <form class="search-container-form" @submit.prevent>
        <input
          type="text"
          class="search-container-input"
          placeholder="Buscar"
          v-model="busquedaArtista"
        />
        <button class="search-container-button" @click="buscarDiscos"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>


  <div class="catalogos-container">
    <aside class="catalogos-sidebar">
      <h3>Géneros</h3>
      <ul>
        <li><router-link to="/rockDisco">Rock</router-link></li>
        <li><router-link to="/popDisco">Pop</router-link></li>
        <li><router-link to="/rapDisco">Rap</router-link></li>
        <li><router-link to="/soulDisco">Soul</router-link></li>
      </ul>
    </aside>
    <div class="catalogos-genero">
      <h2 class="title">Discos Pop</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleHarry'>
              <button class="card-price" :disabled="disco.id !== idBotonHabilitado">{{ disco.precio }}€</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pie />
</template>
  
<script>
import cabecera from "../cabecera.vue";
import pie from "../pie.vue";
export default {
  name: "popDisco",
  components: {
    cabecera,
    pie,
  },
  data() {
    return {
      busquedaArtista: "",
      idBotonHabilitado: 1,
      discos: [
        {
          id: 1,
          nombreArtista: "Harry Styles",
          tituloDisco: "Harry's house",
          imagen: "./pop/discoHarry.png",
          precio: 14.99,
        },
        {
          id: 2,
          nombreArtista: "Rihanna",
          tituloDisco: "Anti",
          imagen: "./pop/discoRihanna.png",
          precio: 19.99,
        },
        {
          id: 3,
          nombreArtista: "Kehlani",
          tituloDisco: "Sweet Sexy Savage",
          imagen: "./pop/kehlani.png",
          precio: 18.99,
        },
        {
          id: 4,
          nombreArtista: "SZA",
          tituloDisco: "SOS",
          imagen: "./pop/sza.png",
          precio: 31.99,
        },
      ],
    };
  },
  computed: {
    discosFiltrados() {
      return this.discos.filter((disco) =>
        disco.nombreArtista
          .toLowerCase()
          .includes(this.busquedaArtista.toLowerCase())
      );
    },
  },
};

</script>