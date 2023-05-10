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
        <li><router-link to="/rockVinilo">Rock</router-link></li>
        <li><router-link to="/popVinilo">Pop</router-link></li>
        <li><router-link to="/rapVinilo">Rap</router-link></li>
        <li><router-link to="/soulVinilo">Soul</router-link></li>
      </ul>
    </aside>
    <div class="catalogos-genero">
      <h2 class="title">Vinilos Rock</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleQueen'>
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
    name: "rockVinilo",
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
          nombreArtista: "Queen",
          tituloDisco: "Bohemian Rhapsody",
          precio: 25.99,
          imagen: "./Rock/queen.jpg",
        },
        {
          id: 2,
          nombreArtista: "Los Beatles",
          tituloDisco: "Abbey Road",
          precio: 20.99,
          imagen: "./Rock/losBeatles.png",
        },
        {
          id: 3,
          nombreArtista: "Rolling Stones",
          tituloDisco: "Tattoo you",
          precio: 21.99,
          imagen: "./Rock/rolling.png",
        },
        {
          id: 4,
          nombreArtista: "Dire Straits",
          tituloDisco: "Brothers in arms",
          precio: 34.99,
          imagen: "./Rock/dire.png",
        }
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