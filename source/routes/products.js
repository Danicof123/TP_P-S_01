const express = require('express'),
      router = express.Router(),
      //Controllers
      {detail, products} = require('../controllers/productsControllers');

      //Path /producto/
router
      .get('/', products)
      .get('/detalle/:id?', detail)

module.exports = router;