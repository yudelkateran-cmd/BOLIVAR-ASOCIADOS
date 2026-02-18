import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// 1. Importar el CSS de Bootstrap (esto arregla el diseño visual)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { cargarHeader } from './js/header.js';
// 2. Importar el JS de Bootstrap (esto hace que funcionen el menú móvil y el carrusel)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Importar tus estilos personalizados (opcional, si usas Sass o CSS extra)
import './scss/styles.css'

import { cargarFooter } from './js/footer.js';

cargarHeader();
cargarFooter(); // Ejecutamos la función

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
