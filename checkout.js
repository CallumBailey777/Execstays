import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'ExecStay Booking Deposit' },
        unit_amount: 10000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://execstays.com/success',
    cancel_url: 'https://execstays.com/cancel',
  });

  res.status(200).json({ url: session.url });
}
