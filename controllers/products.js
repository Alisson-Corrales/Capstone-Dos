require("dotenv").config();
const { StatusCodes } = require('http-status-codes')
const Product = require("../schema/product")


const createProduct = async (req,res) =>{
  const product = await Product.create(req.body)

  res.status(StatusCodes.CREATED).json({product})
}


module.exports = {createProduct} 