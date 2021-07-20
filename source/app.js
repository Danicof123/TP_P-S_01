      //Dependencias
const express = require('express'),
      favicon = require('serve-favicon'),
      path = require('path'),
      //variables de directorio
      faviconDir = path.join(__dirname, '..', 'public', 'images','favicof.png'),
      viewDir = path.join(__dirname, 'views'),
      publicDir = express.static(path.join(__dirname, '..', 'public')),
      //variables express
      port = process.env.PORT || 3000,
      app = express(),
      //Variables de errores
      {error404} = require('./controllers/errorControllers')
      //Variables del enrutador
      router = require('./routes/index');
      product = require('./routes/products');

app
    //Configuraciones del app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)
    //Uso de middlewares
    .use(favicon(faviconDir))
    .use(publicDir)
    .use(express.json())
    //Uso del enrutador
    .use('/', router)
    .use('/producto', product)
    //Middleware para error
    .use(error404);

//Exportando el app
module.exports = app;