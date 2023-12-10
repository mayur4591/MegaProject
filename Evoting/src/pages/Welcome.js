import React from "react";
import "../pages/Welcome.css";
const Welcome = () => {
    return (
        <>
            <div class="backimage d-flex py-auto">
                <div className="mainbody row col-8 p-2 m-auto">
                    <div className="col-md-6 d-flex img-1">
                        <img className="img" src="../images/ashok.png" ></img>
                    </div>
                    <div className="col-md-6">
                        <div className="line-1 pb-2">WELCOME TO <br />E-VOTING PORTAL</div>
                        <div><hr className="line-2"></hr></div>
                        <div className="para-1 py-2">This system is physically supervised by representatives of the institution or independent electoral authorities (EMB – Election Management Body), with the e-voting machines located at the polling stations but physical checks and verifications are performed at each station before voters access the machines to cast votes
                        </div>
                        <div className="row buttons">
                        <div className="col-5 btn-1 my-4 py-2">
                            <a href="/userauthentication" className="btn-a ">User Login</a>
                        </div>
                        <div className="col-5 btn-1 my-4 py-2">
                            <a href="/" className="btn-a ">Admin Login</a>
                        </div>
                        </div>     
                    </div>
                   
                </div>
                <div className="line-4">
                        Copyright © 2023| E-Voting System Portal| Blockchain Technology. All rights reserved.
                </div>
            </div>
        </>
    );
};

export default Welcome;