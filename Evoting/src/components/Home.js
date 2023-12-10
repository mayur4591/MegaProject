import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="userpage d-flex">
                <div className="backimage py-auto">
                    <div className="p-2 dashboard">Dashboard</div>
                    <div className="row dash">
                        <div className="dash-sec col-md-3">
                            <div className="mx-1 dash-sec-a p-2 d-flex">
                                <div>
                                    <div className="count">3</div>
                                    <div className="sec-name">No. Of Positions</div>
                                </div>
                                <img className="sec-ic p-1" src="../images/slide.png" height="50%" width="50%"></img>
                            </div>
                            <div className="mx-1 info p-2">more info</div>
                        </div>
                        <div className="dash-sec col-md-3">
                            <div className="mx-1 dash-sec-a p-2 d-flex">
                                <div>
                                    <div className="count">3</div>
                                    <div className="sec-name">No. Of Candidates</div>
                                </div>
                                <img className="sec-ic p-1" src="../images/avatar.png" height="50%" width="50%"></img>
                            </div>
                            <div className="mx-1 info p-2">more info</div>
                        </div>
                        <div className="dash-sec col-md-3">
                            <div className="mx-1 dash-sec-a p-2 d-flex">
                                <div>
                                    <div className="count">3</div>
                                    <div className="sec-name">Total No. Of Voters</div>
                                </div>
                                <img className="sec-ic p-1" src="../images/candidate.png" height="50%" width="50%"></img>
                            </div>
                            <div className="mx-1 info p-2">more info</div>
                        </div>
                        <div className="dash-sec col-md-3">
                            <div className="mx-1 dash-sec-a p-2 d-flex">
                                <div>
                                    <div className="count">3</div>
                                    <div className="sec-name">Voters Voted</div>
                                </div>
                                <img className="sec-ic p-1" src="../images/edit.png" height="50%" width="50%" ></img>
                            </div>
                            <div className="mx-1 info p-2">more info</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;