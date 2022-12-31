import React from "react"
import './style.css';



const Tes4 = () => {

    let check = document.querySelector(".check");
    let number = document.querySelector(".number");
    let text = document.querySelector(".text");
    let email = document.querySelector('email')
    let form = document.querySelector('from')
    let regex = /^[\d,\s,\+,\-]{6,20}/;

    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    var rString = randomString(32, '23456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');

    function validatenumber(){
        check.addEventListener("click", () => {
            if (number.value == "") {
                text.innerText = "Please Enter Your Phone Number";
                text.style.color = "#fff";
            }
            else if (number.value.match(regex)) {
                text.innerText = "Congrats! You Enter A Valid Phone Number";
                text.style.color = "rgba(4,125,9,1)";
            }
            else {
                text.innerText = "Oops! Your Phone Number Is Invalid";
                text.style.color = "#da3400";
            }
        });
    }

    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    }

    function validateform() {

        form.addEventListener('click', (e) => {
            let messages = []
            if (form.value === '' || form.value == null) {
                messages.push('Address is required')
            }

            if (form.value.length >= 120) {
                messages.push('form must be less than 120 characters')
            }

            if (messages.length > 0) {
                e.preventDefault()
                errorElement.innerText = messages.join(', ')
            }
        })
    }


    return (


        console.log("")



    );

}

export default Tes4