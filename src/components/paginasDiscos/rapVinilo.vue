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
      <h2 class="title">Vinilos Rap</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleNach'>
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
    name: "rapVinilo",
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
          nombreArtista: "Nach",
          tituloDisco: "Suburbia",
          precio: 36.99,
          imagen: "./public/rap/nach.png",
        },
        {
          id: 2,
          nombreArtista: "SFDK",
          tituloDisco: "Redención",
          precio: 24.99,
          imagen: "./public/rap/sfdk.jpg",
        },
        {
          id: 3,
          nombreArtista: "2Pac",
          tituloDisco: "Greatest Hits",
          precio: 32.99,
          imagen: "./public/rap/2pac.jpg",
        },
        {
          id: 4,
          nombreArtista: "Mac Miller",
          tituloDisco: "Swimming",
          precio: 25.99,
          imagen: "./public/rap/mac.jpg",
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