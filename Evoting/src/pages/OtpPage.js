import React, { useEffect, useState } from "react";
import "./OtpPage.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const OtpPage = (props) => {
    const location = useLocation();
    const [error, setError] = useState(null);
    const history = useNavigate();
    const num = location.state.num;
    const vid = location.state.vid;
    const number = '+91' + num;
    const [otp, setotp] = useState('');
    const [user, setuser] = useState(null);
    console.log(vid);
    const sendotp = async () => {

        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
        const confirmation = await signInWithPhoneNumber(auth, number, recaptchaVerifier);
        console.log(confirmation);
        setuser(confirmation);
        //history('/userpage', { state: { vid } });

    };
    const verifyotp = async () => {
        try {
            user.confirm(otp)
                .then((result) => {
                    // User signed in successfully.
                    history('/userpage', { state: vid });
                    // ...
                })
                .catch((error) => {
                    console.log("wrong");
                    setError("Invalid OTP. Please try again."); // Set an error message
                    window.alert(error);
                    // ...
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="step my-2 mr-2 p-3">Step -2</div>
            <div className="Otpbody">
                <div className="container">
                    <h2>Verify Your Mobile Number</h2>
                    <p>
                        We messaged you the six-digit code to the linked mobile number <br />
                        Enter the code below to confirm your phone number
                    </p>
                    <div className="AuthBtn-1 col-6 mx-auto h3"><a onClick={sendotp} className="btn-b my-2">Send OTP</a></div>
                    <div id="recaptcha-container"></div>

                    <input type="text" className="Authinput mb-2" placeholder="XXXXXX" onChange={(e) => setotp(e.target.value)}></input>

                    <div className="AuthBtn-1 col-6 mx-auto h3"><a onClick={verifyotp} className="btn-b my-2">verify OTP</a></div>
                    <small className="info">
                        If you didn't receive a code !! <strong>RESEND</strong>
                    </small>
                </div>
            </div>
        </>
    );
};

export default OtpPage;
