<template>
    <cabecera/>

      <div class="register">
        <form class="register-form" @submit.prevent="handleSubmit">
            <h2 class="register-form-title">Registrarse</h2>
            <div class="form-group">
                <label class="form-group-label" for="name">Nombre completo</label>
                <input class="form-group-input" type="text" id="name" v-model="name" required>
              </div>
              <div class="form-group">
                <label class="form-group-label" for="email">Correo electrónico</label>
                <input class="form-group-input" type="email" id="email" v-model="email" required>
              </div>
              <div class="form-group">
                <label class="form-group-label" for="password">Contraseña</label>
                <input class="form-group-input" type="password" id="password" v-model="password" required>
              </div>
              <div class="form-group">
                <label class="form-group-label" for="confirmPassword">Confirmar contraseña</label>
                <input class="form-group-input" type="password" id="confirmPassword" v-model="confirmPassword" required>
              </div>
            <button class="register-form-button" type="submit">Registrarse</button>
            <div class="register-form-login">
              <router-link to="/login">¿Ya tienes cuenta? <span class="login-form-register-span">Iniciar Sesion</span></router-link>
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleSubmit() {
        // Validamos que se hayan ingresado todos los campos requeridos
        if (!this.name || !this.email || !this.password || !this.confirmPassword) {
          alert('Por favor ingresa todos los campos requeridos.');
          return;
        }
  
        // Validamos que las contraseñas sean iguales
        if (this.password !== this.confirmPassword) {
          alert('Las contraseñas no coinciden. Por favor verifica que sean iguales.');
          return;
        }

        alert('Registro exitoso. Por favor revisa tu correo electrónico para confirmar tu cuenta.');
      },
    },
    components: {
      cabecera,
      pie
    }
  };
  </script>