import React, { useState } from "react";
import "./Sidebar.css";
import "./Result.css";
import ViewResult from "./ViewResult";
const Result = () => {
    const [isVisible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!isVisible);
    };
    return (
        <>
            {
                !isVisible &&

                <div className="userpage votepage">
                    <div className="voteL-1 text-box">Election Assembly</div>
                    <a className="consti p-3" onClick={toggleVisibility}>
                        <div className="asmb col-10 d-flex m-auto">
                            <div className="asmb-name col-11">Gram Panchayat
                                <img className="asmb-img" src="../images/grampanchayat.png" height="50px" width="40px" />
                            </div>
                            <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                        </div>
                    </a>
                </div>
            }
            {isVisible &&
                <div className="">
                    <a className="previous d-flex col-11 mx-auto mt-2" href="/admin/result">
                        <img className="sec-ic p-1" src="../images/previous.png" height="50px" width="50px"></img>
                    </a>
                    <ViewResult />
                </div>
            }

        </>
    );
};

export default Result;