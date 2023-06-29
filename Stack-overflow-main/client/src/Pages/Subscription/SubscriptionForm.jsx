import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { useNavigate, useHistory } from "react-router-dom";
import './SubscriptionForm.css';
import { Link } from 'react-router-dom';


const SubscriptionForm = () => {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState('free');

  const handleSubscription = () => {

    navigate("/PaymentUI");

    const handleSuccess = () => {
      handleSuccess(`You have successfully subscribed to the ${selectedPlan} plan!`);
    };

    //   // return (
    //     <div className='home-container-1'>
    //         <LeftSidebar />
    //          <div className='home-container-2'>
    //              <HomeMainbar />
    //              <RightSidebar />
    //          </div>
    //      </div>
    //   )
  };


  //   return (
  //     <div>
  //       {/* <Success/> */}
  //       <h2>Select a Subscription Plan:</h2>
  //       <div className="plan">
  //         <label>
  //           <input
  //             type="radio"
  //             value="free"
  //             checked={selectedPlan === 'free'}
  //             onChange={() => setSelectedPlan('free')}
  //           />
  //           <span className="plan-name">Free Plan</span>
  //           <span className="plan-description">(1 question/day)</span>
  //         </label>
  //       </div>
  //       <div className="plan">
  //         <label>
  //           <input
  //             type="radio"
  //             value="silver"
  //             checked={selectedPlan === 'silver'}
  //             onChange={() => setSelectedPlan('silver')}
  //           />
  //           <span className="plan-name">Silver Plan</span>
  //           <span className="plan-description">(5 questions/day) - ₹100/month</span>
  //         </label>
  //       </div>
  //       <div className="plan">
  //         <label>
  //           <input
  //             type="radio"
  //             value="gold"
  //             checked={selectedPlan === 'gold'}
  //             onChange={() => setSelectedPlan('gold')}
  //           />
  //           <span className="plan-name">Gold Plan</span>
  //           <span className="plan-description">(Unlimited questions) - ₹1000/month</span>
  //         </label>
  //       </div>
  //       <button onClick={handleSubscription}>Subscribe</button>
  //     </div>
  //   );
  // }


  return (
    <section className="section pt-5 pb-5" id="pricing-plans">
      <div className="top"></div>
      <div className="container">
        <div className="row flex-plans">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Subscription Plans</h2>
            </div>
          </div>
        </div>
        
          <div className="row flex-plans d-flex justify-content-between"> {/* Add the d-flex class and justify-content-between */}
            <div className="col-lg-4">
              <div className="pricing-item" style={{ maxWidth: '350px' }}>
                <div className="pricing-header">
                  <h3 className="pricing-title">FREE PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">INR</span>
                    <span className="price">0 INR</span>
                    <span className="period">/DAY</span>
                  </div>
                  <ul className="list">
                    <li className="active">1 Question per day</li>
                    <li className="active">Unlimited usage of website</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>
                
                <div className="pricing-footer">
                  <Link to="../../PaymentUI" className="btn-primary-line">Select Plan</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-item active" style={{ maxWidth: '350px' }}>
                <div className="pricing-header">
                  <h3 className="pricing-title">SILVER PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">INR</span>
                    <span className="price">100 INR</span>
                    <span className="period">/WEEK</span>
                  </div>
                  <ul className="list">
                    <li className="active">5 Questions per day</li>
                    <li className="active">Unlimited usage of website</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="../../PaymentUI" className="btn-primary-line">Select Plan</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-item" style={{ maxWidth: '350px' }}>
                <div className="pricing-header">
                  <h3 className="pricing-title">GOLD PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">INR</span>
                    <span className="price">1000 INR</span>
                    <span className="period">/Month</span>
                  </div>
                  <ul className="list">
                    <li className="active">Unlimited Questions</li>
                    <li className="active">Unlimited usage of website</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Monthly Reports and Analytics</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link to="../../PaymentUI" className="btn-primary-line">Select Plan</Link>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default SubscriptionForm;