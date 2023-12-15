import React, { useState, useEffect } from "react";
import "../pages/AuthPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const AuthPage = () => {
    const [number, setnumber] = useState("");
    const history = useNavigate();
    // const nextpage = (e) => {
    //     if (number.length != 12) {
    //         toast.error("enter 12 digit adhar");
    //     }
    //     else {
    //         toast.success("valid");

    //         history('/otpVerification', { state: { number } });
    //     }
    // }
    const callAboutpage = async (e) => {
        if (number.length != 12 && number.length > 0) {
            window.alert("enter 12 digit adhar");
        }
        else {
            try {
                const res = await axios.get(`http://localhost:5000/voter/${number}`);
                const ph = res.data;
                if (ph.length != 0) {
                    const num = res.data[0].phone_number;
                    const vid = res.data[0]._id;
                    if (num.length == 10) {
                        window.alert("valid");
                        history('/otpVerification', { state: { num, vid } });
                    }
                }
                else {
                    //khkkh
                    window.alert("not found");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    useEffect(() => {
        callAboutpage();
    }, []);
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
                        <input type="text" className="Authinput mb-2" placeholder="XXXXXXXXXXXX" onChange={(e) => setnumber(e.target.value)}></input>

                        <div className="my-2"><a href="#" className="AuthText-1 ">Forgot Password?</a></div>

                        <div className="AuthBtn-1 col-6 mx-auto h3"><a onClick={callAboutpage} className="btn-b my-2">Log In</a></div>
                        {/* // <ToastContainer /> */}

                    </div>
                </div>
                <div className="col-md-5 fill-b"></div>
            </div>

        </>
    );
};

export default AuthPage;