const express = require('express')
const {uploadImage} = require('../controllers/imageUpload')
const {sendEmail} = require('../controllers/sendEmail')
const {
    getAllProducts,
    createProduct
} = require('../controllers/products')
const router = express.Router()

router.route('/').get(getAllProducts)
router.route('/addProduct').post(createProduct)

router.route('/send').get(sendEmail)
router.route('/uploads').post(uploadImage)

module.exports = router