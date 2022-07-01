const model = require('../models/productsModel');
const errorArray = require('../helpers/errorArray');

const getAllProducts = async () => {
  const data = await model.getAllProducts();
  if (data) return data;
  throw errorArray[1];
};

const verifyData = (data) => {
  if (!data) throw errorArray[0];
};

const getById = async (id) => {
  const data = await model.getById(id);
  verifyData(data);
  return data;
};

const addProducts = async (name) => {
  const dataGetByName = await model.getByName(name);
  const findName = dataGetByName.some((product) => product.name === name);
  if (findName) throw errorArray[2];
  const data = await model.addProducts(name);
  console.log(data);
  return data;
};

module.exports = {
  getAllProducts,
  getById,
  addProducts,
};
