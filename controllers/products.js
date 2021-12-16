require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const Product = require("../schema/product");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({products})
};

module.exports = {
  createProduct,
  getAllProducts,
};
