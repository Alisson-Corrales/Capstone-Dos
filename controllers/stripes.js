require("dotenv");

const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripeCont = async (req, res) => {
  const { totalAmount, purchase } = req.body;
  const calcTotal = () => {
      return totalAmount + purchase
  }

  const paymentIntent = await stripe.paymentIntents.create({
      amount: calcTotal(),
      currency: 'usd'
  })

  res.json({clientSecret: paymentIntent.client_secret})
};

module.exports = { stripeCont };
