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
      <h2 class="title">Vinilos Soul</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleAretha'>
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
    name: "soulVinilo",
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
          nombreArtista: "Aretha Franklin",
          tituloDisco: "Amazing Grace",
          precio: 23.99,
          imagen: "./public/soul/Aretha.png",
        },
        {
          id: 2,
          nombreArtista: "James Brown",
          tituloDisco: "Black and Loud",
          precio: 28.99,
          imagen: "./public/soul/james.jpg",
        },
        {
          id: 3,
          nombreArtista: "Marvin Gaye",
          tituloDisco: "What's Going On",
          precio: 31.99,
          imagen: "./public/soul/marvin.jpg",
        },
        {
          id: 4,
          nombreArtista: "Otis Redding",
          tituloDisco: "Dock of the Bay",
          precio: 13.99,
          imagen: "./public/soul/otis.png"
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