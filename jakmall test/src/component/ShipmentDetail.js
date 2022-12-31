import React from "react"
import arrow from '../assets/arrow-left-solid.svg';
import './style.css';
import { useNavigate } from 'react-router-dom'


const Tes2 = () => {

    const navigate = useNavigate()

    return (


        <div className="container">

            <div onClick={() => navigate("/")} className="back">
                <img onClick={() => navigate("/")} width={"15px"} src={arrow} />
                Delivery Details
            </div>

            <div className="main">
                <div className="deliverydetails">
                    <div className="kiri">

                    <div className="title">
                       Shipment
                        <div className="strip">
                        </div>
                    </div>
                        <div className="b-contain">
                            <label class="b-contain">
                                <span>Send as Dropshipper</span>
                                <input type="checkbox" />
                                <div class="b-input"></div>
                            </label>
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="box2 box2color">
                        <p>Go-Send</p>
                        <p className="textbox">15.000</p>
                        </div>
                        <div className="box2">
                        <p>JNE</p>
                        <p className="textbox">9.000</p>
                        </div>
                        <div className="box2">
                        <p>Personal Courier</p>
                        <p className="textbox">29.000</p>
                        </div>
                    </div>
                    <div className="title">
                       Payment
                        <div className="strip">
                        </div>
                    </div>
                    <div className="box-item">
                        <div className="box2 box2color">
                        <p>E-Wallet</p>
                        <p className="textbox">1.500.000 Left</p>
                        </div>
                        <div className="box3">
                        <p>Bank Transfer</p>
                        </div>
                        <div className="box3">
                        <p>Virtual Account</p>
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
                </div>

                <div>     
                    <p className="summarydetails">Cost of goods <span>500.000</span></p>
                    <p className="summarydetails">Dropshipping fee <span>5.900</span></p>

                    <div className="title title3">       
                    <h2 className="summarydetails" >Total <span>505.900</span></h2>
                    </div>
                    <button onClick={() => navigate("/Finish")} className="button">Pay with E-Wallet</button>
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
                <div className="rectangle rectangle2">
                    <p className="angka">3</p>
                </div>
                <span className="delivery">Finish</span>

            </div>
        </div>

    );

}

export default Tes2