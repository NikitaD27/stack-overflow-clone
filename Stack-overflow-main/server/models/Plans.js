import express from 'express';
const stripe = require('stripe')('sk_test_51MY9u6SGcu8faDtSXXFC8SFiYi8ZPt6HGOko2RYO1zK9leLohi1wuXVaME4gjpwpQ822meuUJXRkCTW8D7AlkRcI00ZIqoZDEq');
const app = express();
const port = 3000;

// Endpoint to handle subscription logic
// app.post('/client/src/Pages/Subscription/SubscriptionForm', async (req, res) => {
 app.post('/plan', async (req, res) => {
  const { plan } = req.body;
// app.post('/client/src/Pages/Subscription/SubscriptionForm', async (req, res) => {
  
  // Define the price ID based on the selected plan
  let priceId;
  switch (plan) {
    case 'silver':
      priceId = 'price_Silver'; // Replace with your actual price ID
      break;
    case 'gold':
      priceId = 'price_Gold'; // Replace with your actual price ID
      break;
    default:
      // Free plan
      priceId = 'price_Free'; // Replace with your actual price ID
      break;
  }

  try {
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `https://localhost:3001/Pages/Subscription/Success`, // Replace with your success URL
      // success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}', // Replace with your success URL
      cancel_url: 'https://localhost:3000/home'
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error('Subscription Error:', error);
    res.status(500).json({ error: 'Failed to create subscription' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
