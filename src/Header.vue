<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="/image/logo.png" alt="CBA Logo" width="50" height="40" class="me-2">
        <span class="brand-text">CBA & ASOCIADOS</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link custom-link" href="index.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="project.html">Proyectos</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">Viviendas</a></li>
          <li class="nav-item"><a class="nav-link custom-link" href="#">Topografía</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle custom-link" href="#" role="button" data-bs-toggle="dropdown">Servicios</a>
            <ul class="dropdown-menu dropdown-menu-dark border-0 shadow-lg">
              <li><a class="dropdown-item" href="#">Consultoría</a></li>
              <li><hr class="dropdown-divider opacity-10"></li>
              <li><a class="dropdown-item" href="contacto.html">Contacto</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 1. Efecto de Vidrio para el Navbar */
.navbar-custom {
  background: rgba(15, 32, 39, 0.85); /* Azul noche con transparencia */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  padding: 15px 0;
}

/* 2. Estilo del Texto del Logo */
.brand-text {
  font-family: 'Georgia', serif;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  font-size: 1.1rem;
}

/* 3. Enlaces de Navegación Minimalistas */
.custom-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 10px;
  position: relative;
  transition: color 0.3s ease;
}

.custom-link:hover {
  color: #ffffff !important;
}

/* 4. Línea animada bajo los enlaces */
.custom-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #4facfe; /* Color de acento */
  transition: width 0.3s ease;
}

.custom-link:hover::after {
  width: 100%;
}

/* Ajuste para que el carrusel no quede tapado por el menú fijo */
@media (min-width: 992px) {
  .navbar-custom {
    padding: 20px 0;
  }
}
</style>