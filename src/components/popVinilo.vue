<template>
    <cabecera/>
    <div class="vinilos-container">
    <aside class="vinilos-sidebar">
      <h3>Géneros</h3>
      <ul>
        <li><router-link to="/rockVinilo">Rock</router-link></li>
        <li><router-link to="/popVinilo">Pop</router-link></li>
        <li><a href="#">Jazz</a></li>
        <li><a href="#">Reggae</a></li>
      </ul>
    </aside>
    <div class="vinilos-pop">
      <h2 class="title">Vinilos Pop</h2>
      <div class="cards">
        <div class="card">
          <img src="../../public/pop/justin.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Justin Bieber</h3>
            <p class="card-text">Justice</p>
            <router-link to="/detalleJustin">
              <button class="card-price">19.99€</button>
            </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/dua.jpg" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Dua Lipa</h3>
            <p class="card-text">Future Nostalgia</p>
            <button class="card-price">31.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/bruno.jpg" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Bruno Mars</h3>
            <p class="card-text">Silk Sonic</p>
            <button class="card-price">20.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/rosalia.jpg" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Rosalia</h3>
            <p class="card-text">El Mal Querer</p>
            <button class="card-price">26.99€</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <pie/>
  </template>
  
  <script>
    import cabecera from "./cabecera.vue";
    import pie from "./pie.vue";

  export default {
    name: "VinilosPop",
    components: {
      cabecera,
      pie,
    },
  };

</script>