import React from "react";
import "./Guidelines.css";
 
const Guidelines = () => {
    return (
    <>
    <div className="userpage d-flex">
        <div className="backimage-1 py-auto">

        <p><h1 className="heading">Welcome to E-voting Portal</h1>
        <div><hr className="line-2"></hr></div></p>
        
        <div className="d-flex">
            <div className="guidelines-box">
                1. Scan your eyes and fingerprints. <br />
            </div>
            {/* <img className="guide_img" src="../images/guidelines.jpg" height="400px" width="400px"></img> */}
        </div> 
        <div className="d-flex">
            <div className="guidelines-box">
                2. Select your constituency. <br />
            </div>
            {/* <img className="guide_img" src="../images/guidelines.jpg" height="400px" width="400px"></img> */}
        </div> 
        <div className="d-flex">
            <div className="guidelines-box">
                3. Select the election type. <br />
            </div>
            {/* <img className="guide_img" src="../images/guidelines.jpg" height="400px" width="400px"></img> */}
        </div> 
        <div className="d-flex">
            <div className="guidelines-box">
                4. Press the button corresponding to the candidate you want to vote. <br />
            </div>
            {/* <img className="guide_img" src="../images/guidelines.jpg" height="400px" width="400px"></img> */}
        </div> 
        </div>
            </div>
    </>
    );
    
};
export default Guidelines;