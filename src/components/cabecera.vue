<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/">
        <img src="../../public/SactusDisk.png" alt="logo">
      </router-link>
    </div>
    <div class="header-menu">
      <ul class="header-menu-list">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Discos
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/popDisco">Pop</router-link></li>
            <li><router-link class="dropdown-item" to="/rockDisco">Rock</router-link></li>
            <li><a class="dropdown-item" href="#">Rap</a></li>
            <li><a class="dropdown-item" href="#">Soul</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vinilos
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/popVinilo">Pop</router-link></li>
            <li><router-link class="dropdown-item" to="/rockVinilo">Rock</router-link></li>
            <li><a class="dropdown-item" href="#">Rap</a></li>
            <li><a class="dropdown-item" href="#">Soul</a></li>
          </ul>
        </li>
      </ul>
    </div>
      <div class="header-search">
        <form class="header-search-form">
          <input type="text" class="header-search-input" placeholder="Buscar">
          <button class="header-search-button"><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="header-sesion">
        <router-link to="/carrito" class="header-sesion-carrito"><i class="fa-solid fa-cart-shopping"></i></router-link>
        <router-link to="/login" class="header-sesion-login"><i class="fas fa-user"></i></router-link>
      </div>

  </header>
</template>

<script>

</script>