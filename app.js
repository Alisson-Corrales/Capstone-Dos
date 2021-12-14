//enviroment setup
require('dotenv').config()
require('express-async-errors')

//app core
const express = require("express");
const app = express();
//const connectDB = require('./DB/connect')

//const fileUpload = require("express-fileupload");

//routers
const productRouter = require("./routes/routeProduct");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

//const stripeController = require("./controllers/stripeCont")

const notFound = require('./middleware/not-found')
//const errorHandlerMiddleware = require('./middleware/error-handler');

const port = process.env.port || 3000


app
    .use(express.static("./public"))
    .use([express.urlencoded({ extended: false }), express.json()])
    .use("/api/v1/product", productRouter)
    .use('/send', router)
    .get("/", (req,res) =>{res.send("")})
    .use(notFound)

    const start = () => {
        try {
            //await connectDB(process.env.MONGO_URL)
            app.listen(port, console.log(`listening @ ${port}`))
        } catch (err) {
            console.log(err);
        }
    }

start()