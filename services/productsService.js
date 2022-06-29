const model = require('../models/productsModel');

const getAllProducts = async () => {
  const data = await model.getAllProducts();
  return data;
};

const verifyData = (data) => {
  if (!data) {
    const error = new Error('Product not found');
    error.status = 404;
    throw error;
  }
};

const getById = async (id) => {
  const data = await model.getById(id);
  verifyData(data);
  return data;
};

module.exports = {
  getAllProducts,
  getById,
};
