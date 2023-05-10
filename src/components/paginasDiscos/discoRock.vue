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
      <h2 class="title">Discos Rock</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleMetallica'>
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
    name: "rockDisco",
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
          nombreArtista: "Metallica",
          tituloDisco: "Black Album",
          precio: 16.99,
          imagen: "./Rock/metallica.png",
        },
        {
          id: 2,
          nombreArtista: "Guns N'Roses",
          tituloDisco: "Appetite for destruction",
          precio: 13.99,
          imagen: "./Rock/roses.png",
        },
        {
          id: 3,
          nombreArtista: "AC/DC",
          tituloDisco: "Power Up",
          precio: 18.99,
          imagen: "./Rock/acdc.png",
        },
        {
          id: 4,
          nombreArtista: "Pink Floyd",
          tituloDisco: "The Wall",
          precio: 15.99,
          imagen: "./Rock/pink.png",
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