const { Router } = require('express');
const control = require('../controllers/productsControl');

const productsRouter = Router();

productsRouter.get('/:id', control.getById);
productsRouter.get('/', control.getAllProducts);
productsRouter.post('/', control.addProducts);

module.exports = {
  productsRouter,
};