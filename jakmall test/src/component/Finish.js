import React from "react"
import arrow from '../assets/arrow-left-solid.svg';
import './style.css';
import { useNavigate } from 'react-router-dom'


const Tes3 = () => {

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    var rString = randomString(5, '23456789ABCDEFGHJKLMNPQRSTUVWXYZ');

    const navigate = useNavigate()

    return (


        <div className="container">

            <div className="main">
                <div className="deliverydetails">
                    <div className="kanan">

                        <div className="title">
                            Thank you
                            <div className="strip">
                            </div>
                        </div>
                    </div>
                    <div className="finishline">
                        <p>{`Order ID : ${rString} `}</p>
                        <p>Your order will be delivered today with GO-SEND</p>
                        <div onClick={() => navigate("/")} className="back">
                            <img onClick={() => navigate("/")} width={"15px"} src={arrow}/>
                            Go to Homepage
                        </div>

                    </div>
                </div>




                <div className="summary">

                    <div>
                        <div className="title title2">
                            Summary
                        </div>
                        <p className="text">10 items purchased</p>
                        <div className="separator">
                        </div>
                        <p>Delivery Estimation</p>
                        <p className="gosend"> Today by GO-SEND</p>
                        <div className="separator">
                        </div>
                        <p>Payment Method</p>
                        <p className="gosend">Bank Transfer</p>
                    </div>

                    <div>
                        <p className="summarydetails">Cost of goods <span>500.000</span></p>
                        <p className="summarydetails">Dropshipping fee <span>5.900</span></p>

                        <div className="title title3">
                            <h2 className="summarydetails" >Total <span>505.900</span></h2>
                        </div>
                    </div>


                </div>
            </div>

            {/* stepper */}
            <div className="stepper-bg">
                <div className="rectangle">
                    <p className="angka">1</p>
                </div>
                <span className="delivery">Delivery</span>
                <i class="arrow right"></i>
                <div className="rectangle">
                    <p className="angka">2</p>
                </div>
                <span className="delivery">Payment</span>
                <i class="arrow right"></i>
                <div className="rectangle">
                    <p className="angka">3</p>
                </div>
                <span className="delivery">Finish</span>

            </div>
        </div>

    );

}

export default Tes3