import React from 'react';
// import mastercardLogo from '/mastercard.png';
// import visaLogo from '/visa.png';
import './PaymentUI.css';

import { useNavigate } from 'react-router-dom';

function PaymentUI() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('submit');
        navigate('/Success');
    };

    return (
        <section className="stripe-form">
            <div className="stripe-container">
                <div className="stripe-card rounded-3" style={{
                    boxShadow: "0 0 5px 1px"
                }}>
                    <div
                        className="stripe-card-body"
                    >
                        <div
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <h1 style={{fontSize: "40px"}}>Payment</h1>
                        </div>
                        <form onSubmit={() => handleSubmit()}> 
                            <p className="stripe-fw-bold mb-4 pb-2">Saved cards:</p>

                            <div className="stripe-card-row mb-4 pb-1">
                                {/* <img className="stripe-img-fluid" src={mastercardLogo} alt="Mastercard Logo" /> */}
                                <div className="stripe-card-input-container">
                                    <div className="stripe-form-outline" style={{ marginTop: "20px" }}>
                                        <input type="text" id="formControlLgXc" className="stripe-form-control" onChange={((e) => e.target.value)} required />
                                        <label
                                            className="stripe-form-label"
                                            htmlFor="formControlLgXc">Cardholder's Name</label>
                                    </div>
                                </div>

                            </div>

                            <div className="stripe-card-row mb-4 pb-1">
                                {/* <img className="stripe-img-fluid" src={visaLogo} alt="Visa Logo" /> */}
                                <div className="stripe-card-input-container">
                                    <div className="stripe-form-outline" style={{ marginTop: "20px" }}>
                                        <input type="text" id="formControlLgXs" className="stripe-form-control" onChange={((e) => e.target.value)} required />
                                        <label className="stripe-form-label" htmlFor="formControlLgXs">Card Number</label>
                                    </div>
                                </div>

                            </div>

                            <p className="stripe-fw-bold mb-4" >Add new card:</p>

                            <div className="stripe-form-outline mb-4" style={{ marginTop: "30px" }}>
                                <input type="text" id="formControlLgXsd" className="stripe-form-control" onChange={((e) => e.target.value)} />
                                <label className="stripe-form-label" htmlFor="formControlLgXsd">Cardholder's Name</label>
                            </div>

                            <div className="stripe-card-row mb-4 pb-1">
                                {/* <img className="stripe-img-fluid" src={visaLogo} alt="Visa Logo" /> */}
                                <div className="stripe-card-input-container">
                                    <div className="stripe-form-outline" style={{ marginTop: "30px" }}>
                                        <input type="text" id="formControlLgXs" className="stripe-form-control" onChange={((e) => e.target.value)} />
                                        <label className="stripe-form-label" htmlFor="formControlLgXs">Card Number</label>
                                    </div>
                                </div>

                            </div>


                            {/* <div className="stripe-col-3">
                                    <div className="stripe-form-outline" style={{ marginTop: "30px" }}>
                                        <input type="text" id="formControlLgXM" className="stripe-form-control" onChange={((e) => e.target.value)} />
                                        <label className="stripe-form-label" htmlFor="formControlLgXM">Expire</label>
                                    </div>
                                </div> */}

                            <div className="stripe-card-row mb-4">

                                <div className="stripe-col-3">
                                    <div className="stripe-form-outline" style={{ marginTop: "30px" }}>
                                        <input type="text" id="formControlLgXM" className="stripe-form-control" onChange={((e) => e.target.value)} />
                                        <label className="stripe-form-label" htmlFor="formControlLgXM">Expire</label>
                                    </div>
                                </div>

                                <div className="stripe-col-3" style={{ marginLeft: "15px" }}>
                                    <div className="stripe-form-outline" style={{ marginTop: "30px" }}>
                                        <input type="password" id="formControlLgXM" className="stripe-form-control" onChange={((e) => e.target.value)} />
                                        <label className="stripe-form-label" htmlFor="formControlLgXM">Cvv</label>
                                    </div>
                                </div>

                            </div>

                            <div style={{display: "flex"}}>


                            <button className="stripe-btn btn-lg btn-block Success">Add card</button>
                            <button style={{marginLeft: "10px"}} className='btn stripe-btn btn-lg btn-block stripe-submit-btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentUI;
