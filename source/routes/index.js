const express = require('express'),
      router = express.Router(),
      //Controllers
      {index} = require('../controllers/indexControllers');

router
      .get('/', index)

module.exports = router;