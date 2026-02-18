//require('path'): permitir importar módulos, json, archivos
const path = require('path');
//ahora vincularemos html con webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { use } = require('react');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', //constructor de la aplicacion compilada
        //resolve toma cualquier directorio y lo compila en la carpeta dist
        path:path.resolve(__dirname,'dist'),
        clean:true //limpiar dist con cada cambio botando lo sucio
    },
    module:
    {
        /*cargar en los loaders->le ayudan a webpack a entender
        archivos que no sean js ni json (estos ultimos los comprende
        por defecto)*/
        rules:[
            {
                /*
                El camino de test:
                1)//: apertura de una expresión regular
                2)\. : acepta cualquier caracter
                3) scss$: que solo aceptará archivos que terminen en scss
                */
                test: /\.scss$/,
                /*
                style-loader: nos permitirá cargar(inyectar) css en HTML
                css-loader: interpretar @import y url dentro del CSS
                postcss-loader: se permitirán agregar los prefijos al CSS
                sass-loader: permite traducir scss a css normal


                */
                use: ['style-loader','css-loader','postcss-loader','sass-loader']



            },
            {
                /* permitirá cargar un archivo html en webpack */
                test:/\.html$/,
                use:['html-loader']


            }
        ]

    },

    plugins:[

        new HtmlWebpackPlugin({template:'.src/index.html'})

    ],

    devServer:{
        /*hot(Hot Module Replacement): permitirá darle el poder al
        servidor para que reemplace módulos en caliente; es decir,
        que se modifica un archivo , solo recarga lo que modificó*/
        hot:true,
        port:3000
    }

};