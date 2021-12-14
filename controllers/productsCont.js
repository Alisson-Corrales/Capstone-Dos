const Product = require("../model/product")

const getAllProducts = (req, res) => {
    res.send("all good bro")
    //const products = await Product.find({})
}

const createNewProduct = (req, res) => {
    res.send("all good broski")
    //const products = await Product.find({})
}

module.exports = {
    createNewProduct,
    getAllProducts
}