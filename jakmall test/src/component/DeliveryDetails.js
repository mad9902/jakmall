import React from "react"
import arrow from '../assets/arrow-left-solid.svg';
import './style.css';
import { useNavigate } from 'react-router-dom'


const Tes1 = () => {

    const navigate = useNavigate()
    
    return (


        <div className="container">

            <div className="back">
                <img  width={"15px"} src={arrow} />
                Back to cart
            </div>

            <div className="main">
                <div className="deliverydetails">
                    <div className="kiri">

                    <div className="title">
                        Delivery Details
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
                        <input className="input email" type={"email"} placeholder="Email" required></input>
                        <input className="input" type={Text} placeholder="Dropshipper name" ></input>
                        <input  className="input" type={"number"} placeholder="Phone Number" ></input>
                        <input className="input" type={"number"} placeholder="Dropshipper number" ></input>
                        <textarea className="input inputxl form" type={Text} placeholder="Delivery Address" ></textarea>
                    </div>
                </div>


                <div className="summary">

                <div>
                <div className="title title2">
                Summary
                </div>
                <p className="text">10 items purchased</p>
                </div>

                <div>     
                    <p className="summarydetails">Cost of goods <span>500.000</span></p>
                    <p className="summarydetails">Dropshipping fee <span>5.900</span></p>

                    <div className="title title3">       
                    <h2 className="summarydetails" >Total <span>505.900</span></h2>
                    </div>
                    <button type="button" onClick={() => navigate("/ShipmentDetail")} className="button">Continue to Payment</button>
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
                <div className="rectangle rectangle2">
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

export default Tes1