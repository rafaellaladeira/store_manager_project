const { Router } = require('express');
const control = require('../controllers/productsControl');
const productsValidation = require('../middlewares/productsValidation');

const productsRoutes = Router();

productsRoutes.get('/search', control.getBySearch);
productsRoutes.get('/:id', control.getById);
productsRoutes.put('/:id', productsValidation, control.updateProduct);
productsRoutes.delete('/:id', control.deleteProduct);
productsRoutes.get('/', control.getAllProducts);
productsRoutes.post('/', productsValidation, control.addProducts);

module.exports = {
  productsRoutes,
};