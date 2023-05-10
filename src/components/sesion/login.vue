<template>

    <cabecera/>
        <div class="login">
          <form class="login-form">
              <h2 class="login-form-title">Iniciar sesión</h2>
              <div class="form-group">
                  <label for="email">Correo electrónico:</label>
                  <input type="email" id="email" v-model="email" required>
              </div>
              <div class="form-group">
                  <label for="password">Contraseña:</label>
                  <input type="password" id="password" v-model="password" required>
              </div>
              <button class="login-form-button" type="submit" @click.prevent="handleSubmit">Iniciar sesión</button>
              <div class="login-form-register">
                <router-link to="/registro">¿No tienes cuenta? <span class="login-form-register-span">Registrate</span></router-link>
              </div>
          </form>
        </div>
    <pie/>
</template>

<script>

import cabecera from '../cabecera.vue';
import pie from '../pie.vue';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      
    }
  },
    components: {
        cabecera,
        pie
    }
}
</script>