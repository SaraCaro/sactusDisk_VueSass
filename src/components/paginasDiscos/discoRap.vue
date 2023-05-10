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
      <h2 class="title">Discos Rap</h2>
      <div class="cards">
        <div class="card" v-for="disco in discosFiltrados" :key="disco.id">
          <img :src="disco.imagen" :alt="disco.tituloDisco" class="card-img" />
          <div class="card-content">
            <h3 class="card-title">{{ disco.nombreArtista }}</h3>
            <p class="card-text">{{ disco.tituloDisco }}</p>
            <router-link to='/detalleKase'>
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
name: "rapDisco",
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
          nombreArtista: "Kase.O",
          tituloDisco: "El Circulo",
          precio: 16.99,
          imagen: "./public/rap/kase.jpg",
        },
        {
          id: 2,
          nombreArtista: "Violadores del Verso",
          tituloDisco: "Vivir Para Contarlo",
          precio: 30.99,
          imagen: "./public/rap/verso.png",
        },
        {
          id: 3,
          nombreArtista: "50cent",
          tituloDisco: "Get Rich Or Die Tryin",
          precio: 18.99,
          imagen: "./public/rap/50cent.jpg",
        },
        {
          id: 4,
          nombreArtista: "Eminem",
          tituloDisco: "The Eminem Show",
          precio: 10.99,
          imagen: "./public/rap/eminem.png",
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