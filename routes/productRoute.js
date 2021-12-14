const express = require('express')
const {uploadImage} = require('../controllers/imageUpload')
const {
    getAllProducts,
    createProduct
} = require('../controllers/products')
const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/uploads').post(uploadImage)

module.exports = router