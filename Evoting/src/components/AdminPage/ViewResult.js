import React from "react";
import "./ViewResult.css";
const ViewResult = () => {
    return (
        <>
        <div className="h2 result-head col-11 mx-auto mt-3">Result</div>
            <div className="data col-11 m-auto d-flex">            
                <div class="col-xl-4 col-sm-6 col-4 py-3">
                    <div class="card r-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="fa-solid fa-users icon-warning"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>156</h3>
                                        <span>Number of Candidates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-4 py-3">
                    <div class="card r-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i className="fa-solid fa-user icon-success"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>273992</h3>
                                        <span>Number of voters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-4 py-3">
                    <div class="card r-card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="fa-solid fa-user-check icon-danger"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>252904</h3>
                                        <span>Voters Voted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="lines col-11 mx-auto"></hr>

            <div className=" mx-auto col-11 py-auto">
                <div className="win-info">Winning Candidate</div>
                <div className="col-10 mx-auto my-2 d-flex win-cad">
                    <img className="cad-img d-flex" src="../images/user.jpg" height="150px" width="150px" />
                    <div className="vote-data my-auto ">
                        <div className="d-count">300</div>
                        <div className="d-text">VOTE</div>
                    </div>
                    <div className="my-auto col-6">
                        <div className="cad-data my-auto d-flex py-2">
                            <div className="d-sec col-3">Name : </div>
                            <div className="d-data">Narendra Modi</div>
                        </div>
                        <div className="cad-data my-auto d-flex py-2">
                            <div className="d-sec col-3">Party : </div>
                            <div className="d-data ">Bharatiya Janata Party</div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="lines col-11 mx-auto"></hr>

            <div className="other-cad">
            <div className=" mx-auto col-11">
                <div className="win-info">Other Candidates</div>
                <div className="col-10 mx-auto my-2 d-flex win-cad">
                    <img className="cad-img d-flex" src="../images/user.jpg" height="150px" width="150px" />
                    <div className="vote-data my-auto ">
                        <div className="d-count">300</div>
                        <div className="d-text">VOTE</div>
                    </div>
                    <div className="my-auto col-6">
                        <div className="cad-data my-auto d-flex py-2">
                            <div className="d-sec col-3">Name : </div>
                            <div className="d-data">Narendra Modi</div>
                        </div>
                        <div className="cad-data my-auto d-flex py-2">
                            <div className="d-sec col-3">Party : </div>
                            <div className="d-data ">Bharatiya Janata Party</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </>
    );
};

export default ViewResult;