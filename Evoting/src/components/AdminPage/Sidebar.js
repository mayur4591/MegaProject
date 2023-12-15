import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <div class="sidebar col-2">
                <div className="logo d-flex p-2">
                    <div className="imglogo" style={{ backgroundImage: `url(../images/vote.jpg)`, clipPath: "circle(50% at 50% 50%)", backgroundSize: 'cover' }}></div>
                    <div className="username p-2">Admin-name</div>
                </div>
                <NavLink className="secbtn nav-link" to="/admin/Home">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/dashboard.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Home</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/admin/Elections">
                    <div className="sections d-flex p-2">
                        <img className="sec-icon p-1" src="../images/dashboard.png" height="40px" width="40px"></img>
                        <div className="section-name p-3 m-auto">Elections</div>
                    </div>
                </NavLink>
                <NavLink className="secbtn nav-link" to="/admin/result">
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