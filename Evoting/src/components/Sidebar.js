import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <div class="sidebar col-2">
                <div className="logo d-flex p-2">
                    <div className="imglogo" style={{ backgroundImage: `url(../images/vote.jpg)`, clipPath: "circle(50% at 50% 50%)", backgroundSize: 'cover' }}></div>
                    <div className="username p-2">username</div>
                </div>
                <NavLink className="secbtn nav-link" to="/userpage/dashboard">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/dashboard.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Dashboard</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/userpage/guidelines">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/guideline.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Guideline</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/userpage/vote">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/voting.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Voting</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/userpage/contact">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/phone.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Contact</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/userpage/result">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/announcement.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Results</div>
                    </div>
                </NavLink>

            </div>
        </>
    );
};

export default Sidebar;