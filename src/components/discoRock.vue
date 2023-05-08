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
      <h2 class="title">Discos Rock</h2>
      <div class="cards">
        <div class="card">
          <img src="../../public/rock/metallica.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Metallica</h3>
            <p class="card-text">Black Album</p>
            <router-link to="/detalleMetallica">
              <button class="card-price">16.99€</button>
            </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/roses.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Guns N'Roses</h3>
            <p class="card-text">Appetite for destruction</p>
            <button class="card-price">13.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/acdc.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">AC/DC</h3>
            <p class="card-text">Power Up</p>
            <button class="card-price">18.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/pink.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Pink Floyd</h3>
            <p class="card-text">The Wall</p>
            <button class="card-price">15.99€</button>
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