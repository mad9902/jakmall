import React, { useState } from "react"
import arrow from '../assets/arrow-left-solid.svg';
import './style.css';
import { useNavigate } from 'react-router-dom'


const Tes1 = ({useDetails, getDetails}) => {

    console.log(useDetails)

    const navigate = useNavigate()

    const [details, setDetails] = useState(useDetails?useDetails:{

        email: "",
        name: "",
        phonenumber: "",
        dropshippernumber: "",
        address: ""

    })

    const handleEmail = (email) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return (true)
        }else{
            return (false)
        }

    }

    const handleNumber = (number) => {

        if (number === '' || number == null) {
            return false
        }

        if (number.length >= 20) {
            alert('number must be less than 20 characters')
            return false
        }

        if (number.length < 6) {
            alert('number must be more than 6 characters')
            return false
        }
        
        try {
            parseInt(number)
            return true
        } catch (error) {
            return false
        }

    }


    const handleAddress = (address) => {

          if (address === '' || address == null) {
                alert('Address is required')
                return false
            }

            if (address.length >= 120) {
                alert('form must be less than 120 characters')
                return false
            }
            return true
    }

    const handleName = (name) => {

          if (name === '' || name == null) {
                alert('Dropshipper name is required')
                return false
            }
            return true
    }



    const handleSubmit = (detail) => {

        if (!handleEmail(detail.email)) {
            alert("You have entered an invalid email address!");
            return
        }

        if (!handleNumber(detail.phonenumber)) {
            alert("Oops! Your Phone Number Is Invalid")
            return
        }

        if (!handleNumber(detail.dropshippernumber)) {
            alert("Oops! Your Dropshipper Number Is Invalid")
            return
        }

        if (!handleAddress(detail.address)) {
            return
        }

        if (!handleName(detail.name)) {
            return
        }

       navigate("/ShipmentDetail")

       getDetails(details)

    }


    return (


        <div className="container">

            <div className="back">
                <img width={"15px"} src={arrow} />
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
                        <input
                            onChange={(e) => setDetails({ ...details, "email": e.target.value })}
                            value={details.email} className="input" type={"email"} placeholder="Email" required>
                        </input>
                        <input className="input" type={Text} placeholder="Dropshipper name"  
                        onChange={(e) => setDetails({ ...details, "name": e.target.value })}
                        value={details.name}>
                        </input>
                        <input className="input" type={"number"} placeholder="Phone Number" 
                        onChange={(e) => setDetails({ ...details, "phonenumber": e.target.value })}
                        value={details.phonenumber}>
                        </input>
                        <input className="input" type={"number"} placeholder="Dropshipper number" 
                        onChange={(e) => setDetails({ ...details, "dropshippernumber": e.target.value })}
                        value={details.dropshippernumber}>
                        </input>
                        <textarea className="input inputxl form" type={Text} placeholder="Delivery Address" 
                        onChange={(e) => setDetails({ ...details, "address": e.target.value })}
                        value={details.address}>
                        </textarea>
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
                        <button type="button" onClick={() => handleSubmit(details)} className="button">Continue to Payment</button>
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