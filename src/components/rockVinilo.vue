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
      <h2 class="title">Vinilos Rock</h2>
      <div class="cards">
        <div class="card">
          <img src="../../public/rock/queen.jpg" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Queen</h3>
            <p class="card-text">Bohemian Rhapsody</p>
            <router-link to="/detalleQueen">
              <button class="card-price">25.99€</button>
            </router-link>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/losBeatles.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Los Beatles</h3>
            <p class="card-text">Abbey Road</p>
            <button class="card-price">20.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/rolling.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Rolling Stones</h3>
            <p class="card-text">Tattoo you</p>
            <button class="card-price">21.99€</button>
          </div>
        </div>
        <div class="card">
          <img src="../../public/rock/dire.png" alt="Disco 1" class="card-img">
          <div class="card-content">
            <h3 class="card-title">Dire Straits</h3>
            <p class="card-text">Brothers in arms</p>
            <button class="card-price">34.99€</button>
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
    name: "VinilosRock",
    components: {
      cabecera,
      pie,
    },
  };

</script>