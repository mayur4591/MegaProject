import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="d-flex">
                <div className="Home backimage p-2">
                    <div>
                        <div className="h1 home-title m-1">Create Election</div>
                        <div className="createpage d-flex">
                            <form className="ele-form mx-auto col-9 p-3 m-3">
                                <div className="ele-type d-flex ele-sec">
                                    <label className="mx-1 px-3" for="">Election Type :</label>
                                    <input type="text"></input>
                                </div>
                                <hr className="line-b"></hr>
                                <div className="ele-type d-flex ele-sec">
                                    <label className="mx-1 px-3" for="">Total No. Of Voters :</label>
                                    <input type="text"></input>
                                </div>
                                <hr className="line-b"></hr>
                                <div className="ele-consti d-flex ele-sec">
                                    <label className="mx-1 px-3" for="">Select Constituency :</label>
                                    <select class="form-select ">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <hr className="line-b"></hr>
                                <input type="Submit" value="Create"></input>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="h1 home-title m-1">Add Constituency</div>
                        <div className="createpage d-flex">
                            <form className="ele-form col-9 mx-auto p-3 m-3">
                                <div className="ele-type d-flex ele-sec">
                                    <label className="mx-1 px-3" for="">Constituency Name :</label>
                                    <input type="text"></input>
                                </div>
                                <hr className="line-b"></hr>
                                <div className="ele-type d-flex ele-sec">
                                    <label className="mx-1 px-3" for="">Total No. Of Voters :</label>
                                    <input type="text"></input>
                                </div>
                                <hr className="line-b"></hr>
                                <div className="row">
                                    <div className="ele-type d-flex ele-sec col-6">
                                        <label className="mx-1 px-2" for="">Male Voter Count</label>
                                        <input type="text"></input>
                                    </div><div className="ele-type d-flex ele-sec col-6">
                                        <label className="mx-1 px-2" for="">Female Voter Count</label>
                                        <input type="text"></input>
                                    </div>
                                </div>
                                <hr className="line-b"></hr>
                                <input type="Submit" value="Add"></input>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;