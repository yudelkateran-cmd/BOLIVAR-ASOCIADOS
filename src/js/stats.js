// src/js/stats.js

export function cargarEstadisticas() {
    const statsHTML = `
    <section class="py-5 text-white" style="background-color: #0b1116; border-top: 3px solid #ffc107;">
        <div class="container">
            <div class="row text-center">
                
                <div class="col-md-3 mb-4 mb-md-0">
                    <i class="bi bi-calendar-check text-warning fs-1 mb-2"></i>
                    <h2 class="display-4 fw-bold counter" data-target="20">0</h2>
                    <p class="text-uppercase letter-spacing-2">Años de Experiencia</p>
                </div>

                <div class="col-md-3 mb-4 mb-md-0">
                    <i class="bi bi-building-fill-check text-warning fs-1 mb-2"></i>
                    <h2 class="display-4 fw-bold counter" data-target="230">0</h2>
                    <p class="text-uppercase letter-spacing-2">Proyectos Ejecutados</p>
                </div>

                <div class="col-md-3 mb-4 mb-md-0">
                    <i class="bi bi-rulers text-warning fs-1 mb-2"></i>
                    <h2 class="display-4 fw-bold counter" data-target="5000">0</h2>
                    <p class="text-uppercase letter-spacing-2">Planos Diseñados</p>
                </div>

                <div class="col-md-3">
                    <i class="bi bi-people-fill text-warning fs-1 mb-2"></i>
                    <h2 class="display-4 fw-bold counter" data-target="98">0</h2>
                    <p class="text-uppercase letter-spacing-2">% Clientes Felices</p>
                </div>

            </div>
        </div>
    </section>
    `;

    // 1. Insertar el HTML antes del footer (o donde prefieras)
    // Buscamos la sección de "Cotizar Proyecto" para ponerlo justo antes
    const cotizarSection = document.querySelector('footer').previousElementSibling; 
    if(cotizarSection) {
        cotizarSection.insertAdjacentHTML('beforebegin', statsHTML);
    } else {
        // Si no encuentra donde, lo pone al final del body (antes del script)
        document.body.insertAdjacentHTML('beforeend', statsHTML);
    }

    // 2. Lógica de Animación (Observer)
    iniciarContadores();
}

function iniciarContadores() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Mientras más alto, más lento

    // Usamos IntersectionObserver para que la animación empiece SOLO cuando se ve en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + (target === 98 ? '%' : '+'); // Agrega un + o % al final
                    }
                };
                
                updateCount();
                observer.unobserve(counter); // Dejar de observar una vez animado
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del elemento es visible

    counters.forEach(counter => observer.observe(counter));
}