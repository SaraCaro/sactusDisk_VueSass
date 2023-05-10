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
      <h2 class="title">Vinilos Pop</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleJustin'>
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
    name: "popVinilo",
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
          nombreArtista: "Justin Bieber",
          tituloDisco: "Justice",
          precio: 19.99,
          imagen: "./public/pop/justin.png",
        },
        {
          id: 2,
          nombreArtista: "Dua Lipa",
          tituloDisco: "Future Nostalgia",
          precio: 31.99,
          imagen: "./public/pop/dua.jpg",
        },
        {
          id: 3,
          nombreArtista: "Bruno Mars",
          tituloDisco: "Silk Sonic",
          precio: 20.99,
          imagen: "./public/pop/bruno.jpg",
        },
        {
          id: 4,
          nombreArtista: "Rosalia",
          tituloDisco: "El Mal Querer",
          precio: 26.99,
          imagen: "./public/pop/rosalia.jpg",
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