# Models (folder)

### products.js
- name - String
    - Required
- price - Number
    - Required
- image - String
    - Required


# Controller (folder)

### productsCont.js
- createProduct
- getAllProducts
- getOneProduct
- deleteProduct

### sendEmail.js
- sendEmail

### imageUpload.js


# Routes (folder)
- '/'
    - GET - getAllProducts
    - POST - createProduct
- '/uploads'
    - POST - createImage