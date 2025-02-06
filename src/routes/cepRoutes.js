
const express = require('express');
const CepController = require('../app/controllers/cepController');

const router = express.Router();


router.get('/cep/:cep', CepController.getAddressByCep);

module.exports = router;
