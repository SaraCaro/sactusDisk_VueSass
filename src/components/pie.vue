<template>
<footer class="footer">
  <div class="footer-location">
    <p class="footer-location-title">Donde Estamos <i class="fa-sharp fa-solid fa-location-dot"></i></p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.9986765489043!2d-3.603731617404845!3d37.10636519287154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fae7e14b826d%3A0x1a95be70baae6276!2s18150%20G%C3%B3jar%2C%20Granada!5e0!3m2!1ses!2ses!4v1683200581185!5m2!1ses!2ses" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
  <div class="footer-contactInfo">
    <p class="footer-contactInfo-title">Contacto</p>
    <p class="footer-contactInfo-text"><i class="fa-solid fa-phone"></i> Teléfono: +34 777 777 777</p>
    <p class="footer-contactInfo-text"><i class="fa-solid fa-envelope"></i> Correo electrónico: sactus@gmail.com</p>
  </div>
  <div class="footer-companyInfo">
    <p class="footer-companyInfo-title">Sobre Nosotros</p>
    <p class="footer-companyInfo-text">
        Somos una empresa dedicada a la venta de discos de vinilo y cd. Nuestro objetivo es ofrecer a nuestros clientes una gran variedad de discos de diferentes artistas y estilos musicales.
    </p>
  </div>
  <div class="footer-copyright">
    <p><i class="fa-regular fa-copyright"></i> 2023 SactusDisk. Todos los derechos reservados.</p>
  </div>
  <div class="footer-socialLinks">
    <a href="#" class="footer-socialLinks-item"><i class="fa-brands fa-instagram"></i></a>
    <a href="#" class="footer-socialLinks-item"><i class="fa-brands fa-twitter"></i></a>
    <a href="#" class="footer-socialLinks-item"><i class="fa-brands fa-facebook"></i></a>
  </div>
</footer>
<a href="#" class="arrow" @click="scrollPage">
    <i :class="arrowIcon"></i>
  </a>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const isAtBottom = ref(false);
const arrowIcon = ref('fa-solid fa-circle-arrow-down');

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  // obtiene la posición actual de la página y verifica si está en la parte inferior
  const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  isAtBottom.value = isBottom;

  // cambia el ícono de la flecha según si está en la parte inferior o no
  if (isBottom) {
    arrowIcon.value = 'fa-solid fa-circle-arrow-up';
  } else {
    arrowIcon.value = 'fa-solid fa-circle-arrow-down';
  }
};

const scrollPage = () => {
  // obtiene la posición actual de la página
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  // desplaza la página hacia abajo o hacia arriba según si está en la parte inferior o no
  if (isAtBottom.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: currentScroll + window.innerHeight, behavior: 'smooth' });
  }
};

</script>