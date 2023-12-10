import React from "react";
import "../pages/AuthPage.css";
const AuthPage = () => {
    return (
        <>
            <div className="step my-2 mr-2 p-3">Step -1</div>
            <div className="loginpage row">
                <div className="col-md-7 fill-a d-flex py-auto p-1">
                    <div className="col-md-9 col Auth-a">
                        <div className="Authline-1 h3">Enter your Credentials</div>
                        <div className="Authline-2 py-3 h1">Log In</div>

                        <hr className="Authline-3 mb-3"></hr>

                        <div className="Authlabel py-1">Aadhar Number</div>
                        <input type="text" className="Authinput mb-2" placeholder="XXXX-XXXX-XXXX"></input>

                        <div className="Authlabel py-1">Voter ID</div>
                        <input type="text" className="Authinput mb-2" placeholder="xxxxxxxx"></input>

                        <div className="my-2"><a href="#" className="AuthText-1 ">Forgot Password?</a></div>

                        <div className="AuthBtn-1 col-6 mx-auto h3"><a href="/otpVerification" className="btn-b my-2">Log In</a></div>
                        
                    </div>
                </div>
                <div className="col-md-5 fill-b"></div>
            </div>

        </>
    );
};

export default AuthPage;