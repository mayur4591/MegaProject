import React from "react";
import "./Sidebar.css";
import "./Vote.css";
import { NavLink } from "react-router-dom";
const SubmitVote = () => {
    return (
        <>
            <div className="userpage votepage">
                <div className="voteL-1">2. Choose the Candidate </div>
                <div className="table-header d-flex my-2">
                    <div className="col-2">Name Of the candidate</div>
                    <div className="col-5">Party</div>
                    <div className="col-2">Symbol</div>
                    <div className="col-3">Vote</div>
                </div>
                <div className="table-data d-flex ">
                    <div className="col-2 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                        <div className="btn-sm cad-info col-6 mx-auto my-2">View More</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                    <div className="col-3 "><a className="vote-btn-a" href="/submitvote"><div className="btn-sm vote-btn col-4 m-auto">Vote</div></a></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                    <div className="col-2 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                        <div className="btn-sm cad-info col-6 mx-auto my-2">View More</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                    <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm vote-btn col-4 m-auto">Vote</div></a></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                    <div className="col-2 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                        <div className="btn-sm cad-info col-6 mx-auto my-2">View More</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                    <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm vote-btn col-4 m-auto">Vote</div></a></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div className="table-data d-flex ">
                    <div className="col-2 m-auto">
                        <div className="cad-name">Narendra Modi</div>
                        <div className="btn-sm cad-info col-6 mx-auto my-2">View More</div>
                    </div>
                    <div className="col-5 m-auto">Bharatiya Janata Party</div>
                    <div className="col-2 m-auto"><img className="" src="../images/logo1.png" ></img></div>
                    <div className="col-3 m-auto"><a className="vote-btn-a" href="/submitvote"><div className="btn-sm vote-btn col-4 m-auto">Vote</div></a></div>
                </div>
                <hr className="vline-1 col-11 m-auto"></hr>
                <div class='walkthrough-pagination'>
                    <NavLink to="/userpage/vote" className='dot'></NavLink>
                    <NavLink to="/userpage/submit" className='dot'></NavLink>
                </div>
            </div>
        </>
    );
};
                                                                                    
export default SubmitVote;