import React, { useEffect } from "react";
import "./OtpPage.css";

const OtpPage = () => {
    useEffect(() => {
        const otp=[];
        const codes = document.querySelectorAll('.code');
        codes[0].focus();
        codes.forEach((code, idx) => {
            code.addEventListener('keydown', (e) => {
                if (e.key >= 0 && e.key <= 9) {
                    codes[idx].value = '';
                    otp[idx]=e.key;
                    if (idx < codes.length - 1) {
                        setTimeout(() => codes[idx + 1].focus(), 10);
                    }
                } else if (e.key === 'Backspace') {
                    if (idx > 0) {
                        setTimeout(() => codes[idx - 1].focus(), 10);
                        otp[idx]=null;
                    }
                }
            });
        });
        console.log(otp);
    }, []);

    return (
        <>
            <div className="step my-2 mr-2 p-3">Step -2</div>
            <div className="Otpbody">
                <div class="container">
                    <h2>Verify Your Mobile Number</h2>
                    <p>
                        We messaged you the six digit code to linked mobile number <br />
                        Enter the code below to confirm your phone number
                    </p>

                    <div class="code-container">
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                    </div>

                    <div>
                        <a href="/userpage"><button type="button" class="btn btn-primary">Verify</button></a>
                    </div>

                    <small class="info">
                        If you didn't receive a code !! <strong> RESEND</strong>
                    </small>

                </div>

            </div>
        </>
    );
};

export default OtpPage;