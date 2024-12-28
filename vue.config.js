/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
  
esto de arriba es lo que había original. Lo de abajo es una prueba*/





// vue.config.js file to be place in the root of your repository
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
  '/mqm/' : '/'              //Utilizo el nombre de LA CARPETA DE EJEMPLO. TU USA EL TUYO
  }
  
