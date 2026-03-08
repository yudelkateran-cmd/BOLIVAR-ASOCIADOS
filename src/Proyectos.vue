<template>
  <div class="proyectos-page">
    <Header />
    
    <header class="project-header text-center">
        <div class="container">
            <span class="cta-tagline">Nuestra Trayectoria</span>
            <h1 class="display-4 cta-title text-white">Obras Destacadas</h1>
            <p class="subtitle">Seleccione un proyecto para visualizar detalles técnicos y galerías de obra.</p>
        </div>
    </header>

    <div class="container mb-5 project-carousel-container">
        <div id="projectCarousel" class="carousel slide shadow-premium" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="4"></button>
            </div>
            
            <div class="carousel-inner rounded-4 overflow-hidden"> 
                <div class="carousel-item active">
                    <a href="#">
                        <img src="image/buque.jpg" class="d-block w-100 h-project" alt="Proyecto Naval">
                        <div class="carousel-caption glass-caption">
                            <h5 class="display-title">Proyecto de Containers</h5>
                            <p class="subtitle">Ficha técnica y logística portuaria.</p>
                        </div>
                    </a>
                </div>

                <div class="carousel-item">
                    <a href="#">
                        <img src="image/paraiso.png" class="d-block w-100 h-project" alt="Hotel Paraíso">
                        <div class="carousel-caption glass-caption">
                            <h5 class="display-title">Urbanismo Hotel Paraíso</h5>
                            <p class="subtitle">Cálculo estructural y desarrollo urbano.</p>
                        </div>
                    </a>
                </div>

                </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Proyectos',
  components: { Header, Footer }
}
</script>

<style scoped>
.proyectos-page {
    background-color: #f8f9fa;
    min-height: 100vh;
}

.project-header {
    padding: 150px 0 80px; /* Espacio para el Header fixed */
    background: linear-gradient(rgba(15, 32, 39, 0.9), rgba(15, 32, 39, 0.9)), 
                url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000');
    background-size: cover;
    background-position: center;
}

.project-carousel-container {
    margin-top: -50px; /* Sube un poco el carrusel para que pise el fondo */
    max-width: 900px;
}

.h-project {
    height: 500px;
    object-fit: cover;
}

/* Efecto hover en imágenes */
.carousel-item a {
    transition: all 0.3s ease;
    display: block;
}

.carousel-item:hover img {
    filter: brightness(80%);
    transform: scale(1.02);
}
</style>