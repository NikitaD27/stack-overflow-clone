import React from 'react';

import '../../App.css'


const Success = () => {
    console.log("in sub page")
    return (
      <div className="success-container">
        <h1 className="center-heading" style={{ marginTop: '60px'}}>Subscription Successful</h1>
        <p>Thank you for subscribing to our service!</p>
        {/* Add any additional content or components as needed */}
      </div>
    );
    

};

export default Success;

