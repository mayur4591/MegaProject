import React, {useEffect} from "react";
import "./Sidebar.css";
import "./Vote.css";
import { NavLink } from "react-router-dom";
const Vote = () => {
    useEffect(() => {
        const asmbElements = document.querySelectorAll(".asmb");
        const colors = ['#0dcaf0','#799eff','blue','#320398']
        asmbElements.forEach((element, idx) => {
            element.style.backgroundColor = colors[idx%4];
        });
      }, []);
    return (
        <>
            <div className="userpage votepage">
                <div className="voteL-1">1. Choose the Election Assembly</div>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto">
                        <div className="asmb-name col-11">Gram Panchayat</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto">
                        <div className="asmb-name col-11">Municipality</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto">
                        <div className="asmb-name col-11">State Legislative Assembly</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <a className="consti p-3" href="/userpage/submit">
                    <div className="asmb col-10 d-flex m-auto">
                        <div className="asmb-name col-11">President</div>
                        <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                    </div>
                </a>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};

export default Vote;