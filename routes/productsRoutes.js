const { Router } = require('express');
const control = require('../controllers/productsControl');
const productsValidation = require('../middlewares/productsValidation');

const productsRoutes = Router();

productsRoutes.get('/:id', control.getById);
productsRoutes.get('/', control.getAllProducts);
productsRoutes.post('/', productsValidation, control.addProducts);

module.exports = {
  productsRoutes,
};