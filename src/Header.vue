<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="/image/logo.png" alt="CBA Logo" width="50" height="40" class="me-2">
        <span class="brand-text">CBA & ASOCIADOS</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link custom-link" to="/proyectos">Proyectos Realizados</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#">Viviendas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-link" href="#">Topografía</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle custom-link" href="#" role="button" data-bs-toggle="dropdown">
              Servicios
            </a>
            <ul class="dropdown-menu dropdown-menu-dark border-0 shadow-lg">
              <li><a class="dropdown-item" href="#">Consultoría</a></li>
              <li><hr class="dropdown-divider opacity-10"></li>
              <li><a class="dropdown-item" href="#">Contacto</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Efecto de Vidrio (Glassmorphism) */
.navbar-custom {
  background: rgba(15, 32, 39, 0.9); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  transition: all 0.4s ease;
}

.brand-text {
  font-family: 'Georgia', serif;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff;
  font-size: 1.1rem;
}

.custom-link {
  color: rgba(255, 255, 255, 0.8) !important;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 10px;
  position: relative;
}

/* Clase activa automática de Vue Router */
.router-link-active {
  color: #ffffff !important;
}

.router-link-active::after {
  width: 100% !important;
}

.custom-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #4facfe;
  transition: width 0.3s ease;
}

.custom-link:hover::after {
  width: 100%;
}
</style>