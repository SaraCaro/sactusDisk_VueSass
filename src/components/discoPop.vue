<template>
    <cabecera/>
    <div class="vinilos-container">
    <aside class="vinilos-sidebar">
      <h3>Géneros</h3>
      <ul>
        <li><router-link to="/rockDisco">Rock</router-link></li>
        <li><router-link to="/popDisco">Pop</router-link></li>
        <li><a href="#">Jazz</a></li>
        <li><a href="#">Reggae</a></li>
      </ul>
    </aside>
    <div class="vinilos-pop">
      <h2 class="title">Discos Pop</h2>
      <div class="cards">
        <div class="card">
          <img src="../../public/pop/discoHarry.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Harry Styles</h3>
            <p class="card-text">Harry's house</p>
            <router-link to="/detalleHarry">
              <button class="card-price">14.99€</button>
            </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/discoRihanna.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Rihanna</h3>
            <p class="card-text">Anti</p>
            <button class="card-price">19.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/discoKehlani.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Kehlani</h3>
            <p class="card-text">Sweet Sexy Savage</p>
            <button class="card-price">18.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/pop/sza.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">SZA</h3>
            <p class="card-text">SOS</p>
            <button class="card-price">31.99€</button>
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