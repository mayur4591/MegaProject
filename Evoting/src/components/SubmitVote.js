import { React, useEffect, useState } from "react";
import "./Sidebar.css";
import "./Vote.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CadInfo from "./CadInfo";
const SubmitVote = (p) => {
    const [candata, setcandata] = useState({});
    const candidateid = p.data.constituencydata.Candidate_id;
    const voterid = p.data.vvid;
    const constituencyid = p.data.constituencydata._id;
    if (p) {
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
                    {
                        Object.values(candidateid).map((val, ind) => (
                            <CadInfo key={ind} data={val} conid={constituencyid} voterdata={voterid} voterlist={p.data.constituencydata.Voter_id} votedlist={p.data.constituencydata.Voted_list} />
                        ))
                    }

                    <div class='walkthrough-pagination'>
                        <NavLink to="/userpage/vote" className='dot'></NavLink>
                        <NavLink to="/userpage/voteboard" className='dot'></NavLink>
                        <NavLink to="/userpage/submit" className='dot'></NavLink>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <section>
                    <aside>

                        <div class="info__box">
                            <div class="left_box">
                                <p class="shinny info__text_one"></p>
                                <p class="shinny info__text_two"></p>
                                <p class="shinny info__text_three"></p>
                            </div>
                            <div class="right_box">
                                <div class="shinny image"></div>
                            </div>

                        </div>

                        <div class="info__box">
                            <div class="left_box">
                                <p class="shinny info__text_one"></p>
                                <p class="shinny info__text_two"></p>
                                <p class="shinny info__text_three"></p>
                            </div>
                            <div class="right_box">
                                <div class="shinny image"></div>
                            </div>

                        </div>

                        <div class="info__box">
                            <div class="left_box">
                                <p class="shinny info__text_one"></p>
                                <p class="shinny info__text_two"></p>
                                <p class="shinny info__text_three"></p>
                            </div>
                            <div class="right_box">
                                <div class="shinny image"></div>
                            </div>

                        </div>

                    </aside>

                </section>
            </>
        )
    }
};

export default SubmitVote;



