import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripeRoute = express.Router();

const stripe = Stripe(process.env.STRIPE_KEY);

stripeRoute.post("/create-checkout-session", async (req, res) => {
  const orderId = req.body.orderId;
  console.log(orderId);
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.desc,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qty,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `https://shopnest-client.herokuapp.com/pay/${orderId}`,
    cancel_url: "https://shopnest-client.herokuapp.com/cart",
  });

  res.send({ url: session.url, sucess: "sucess" });
});

export default stripeRoute;
