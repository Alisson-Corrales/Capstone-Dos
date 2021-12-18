require('dotenv').config()
const nodemailer = require("nodemailer")
const message = {
    to:"user@gmail.org",
    from:"Seller, <seller@sellingemail.net>",
    subject:"You bought the privilege of a picture's use!",
    html:"<h1>CONGRATS<h1> <p>YOU BOUGHT A PICTURE</p> <p>good job</p>"
}

const sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ibgzpmfdphxhwf6r@ethereal.email',
            pass: process.env.MAILER_PASS,
        }
    });

    const info = await transporter.sendMail(message);

    res.json(info);
}

module.exports = {sendEmail}