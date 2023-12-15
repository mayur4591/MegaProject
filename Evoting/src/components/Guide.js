import React from "react";
import "./Guide.css";
 
const Guidelines = () => {
    return (
    <>
        <p><h1 className="heading">Welcome to E-voting Portal.</h1></p>
        <div className="d-flex">
            <div className="guidelines-box">
                1. Scan your eyes and fingerprints. <br /><br />
                2. Select your constituency. <br /><br />
                3. Select the election type. <br /><br />
                4. Press the button in front of the candidate you want to vote. <br /><br />
            </div>
            <img className="guide_img" src="../images/guidelines.jpg" height="400px" width="400px"></img>
        </div> 
    </>
    );
    
};
export default Guidelines;