

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