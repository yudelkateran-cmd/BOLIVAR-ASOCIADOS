const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // Modo de desarrollo para facilitar la lectura de errores
  mode: 'development',

  // 1. PUNTO DE ENTRADA: El archivo principal donde arranca tu app Vue
  entry: './src/main.js',

  // 2. SALIDA: Dónde Webpack dejará el código ya compilado y listo para el navegador
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Este es el archivo que conectarás a tu HTML
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  // AGREGA ESTE BLOQUE NUEVO:
  devServer: {
    static: './', // Esto le dice que lea el index.html de tu carpeta principal
  },

  // 3. REGLAS: Cómo debe Webpack traducir cada tipo de archivo
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  // 4. PLUGINS: Herramientas extra (el de Vue es obligatorio)
  plugins: [
    new VueLoaderPlugin()
  ],

  // 5. RESOLUCIÓN: Permite importar archivos sin tener que escribir su extensión (.js o .vue)
  resolve: {
    extensions: ['.js', '.vue', '.json']
  }
};