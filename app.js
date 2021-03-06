//enviroment setup
require('dotenv').config()
require('express-async-errors')

//app core
const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");


//routers
// const notFound = require('./middleware/not-found')
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

const connectDB = require('./DB/connect')

//const stripeController = require("./controllers/stripeCont")

//const errorHandlerMiddleware = require('./middleware/error-handler');

const port = process.env.port || 3000

app
    .use(express.static("./public"))
    .use([express.urlencoded({ extended: false }), express.json()])
    .use(fileUpload({ useTempFiles: true }))

    .use("/api/v1/products", productRouter)
    .get
    

// .use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`listening @ ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start()
