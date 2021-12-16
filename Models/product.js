const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    unique: true,
    maxlength: 30
  },
  price: {
    type: String,
    required: [true, "please provide a price"],
    maxlength: 7
  },
  image: {
    required: [true, "please provide a image"],
    type: String,
  },
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)
