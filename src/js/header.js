// src/js/header.js

export function cargarHeader() {
    const headerHTML = `
    <nav class="navbar navbar-expand-lg bg-ingenieria" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="/image/logo.png" alt="Logo" width="60" height="50" class="d-inline-block align-text-top">
                CBA & Asociados
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="project.html">Proyectos Realizados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Viviendas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Topografía</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Más Servicios
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Consultoría</a></li>
                            <li><a class="dropdown-item" href="contacto.html">Contacto</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    // Insertamos el Navbar al PRINCIPIO del body ('afterbegin')
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    // Código para resaltar el enlace activo automáticamente
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });
}