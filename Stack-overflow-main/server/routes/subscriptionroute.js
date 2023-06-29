import express from 'express';
const app = express();

// Import the subscription route
import subscriptionRoute from './Pages/Subscription/SubscriptionForm';

// Mount the subscription route
app.use(subscriptionRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
