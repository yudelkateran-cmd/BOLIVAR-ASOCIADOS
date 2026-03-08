<template>
  <div> 
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="image/Untitled design3.png" class="d-block w-100 h-v-80" alt="Ingeniería Civil">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">INFRAESTRUCTURA DE PRECISIÓN</h5>
            <p class="subtitle">Soluciones técnicas que transforman el entorno urbano con los más altos estándares.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="image/Untitled design.png" class="d-block w-100 h-v-80" alt="Topografía">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">TOPOGRAFÍA AVANZADA</h5>
            <p class="subtitle">Mediciones exactas para proyectos que requieren rigor técnico y legal.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="image/Untitled design2.png" class="d-block w-100 h-v-80" alt="Desarrollo Urbano">
          <div class="carousel-caption d-none d-md-block glass-caption">
            <h5 class="display-title">DESARROLLO INTEGRAL</h5>
            <p class="subtitle">Transformamos terrenos en comunidades sostenibles y proyectos de vida.</p>
          </div>
        </div>
      </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    <section class="container py-120 reveal-section">
      <div class="row align-items-center">
        <div class="col-md-6 reveal-left">
          <span class="cta-tagline">Trayectoria y Confianza</span>
          <h2 class="display-6 fw-bold mb-4">Ingeniería que construye futuro</h2>
          <p class="text-muted lead-custom">
            Somos un equipo multidisciplinario enfocado en brindar soluciones integrales en 
            desarrollo urbano y construcción. Con años de experiencia en el sector, 
            transformamos terrenos en comunidades y planos en hogares.
          </p>
          <ul class="list-unstyled mt-4">
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-patch-check-fill text-primary me-3"></i>
              <span>Precisión topográfica garantizada con tecnología GNSS.</span>
            </li>
            <li class="mb-3 d-flex align-items-center">
              <i class="bi bi-patch-check-fill text-primary me-3"></i>
              <span>Cumplimiento estricto de plazos y normativas vigentes.</span>
            </li>
          </ul>
          <a href="#" class="btn-premium-dark mt-4">Conoce nuestra historia</a>
        </div>
        <div class="col-md-6 mt-5 mt-md-0 reveal-right">
          <div class="image-wrapper">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000" class="img-fluid rounded-custom shadow-premium">
          </div>
        </div>
      </div>
    </section>

    <section class="cta-premium">
      <div class="cta-overlay"></div>
      <div class="container cta-content text-center">
        <span class="cta-tagline">Excelencia en cada detalle</span>
        <h2 class="cta-title">¿Listo para materializar su visión?</h2>
        <p class="cta-text">Nuestro equipo técnico garantiza precisión y cumplimiento en cada etapa.</p>
        <a href="#" class="btn-premium">Solicitar Consultoría Técnica</a>
      </div>
    </section>
  </div> 
</template>

<script>
export default {
  name: 'Inicio',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
            el.classList.add('reveal-visible');
          });
        }
      });
    }, { threshold: 0.2 });

    const section = document.querySelector('.reveal-section');
    if (section) observer.observe(section);
  }
}
</script>