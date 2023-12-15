import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import "./Voteboard.css";
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
const Voteboard = (p) => {
    const history = useNavigate();
    const [constituencydata, setconstituencydata] = useState('');
    const [vvid, setvvid] = useState('');
    const callAboutpage = async (e) => {
        try {
            const type_id = p.data.val[0]._id;
            const voterid = p.data.vid;
            setvvid(voterid);
            const res = await axios.get('http://localhost:5000/getuserconstituency', {
                params: { type_id, voterid }
            });
            const data = res.data;
            setconstituencydata(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const gotovote = () => {
        history('/userpage/submit', { state: { constituencydata, vvid } });
    }

    useEffect(() => {
        callAboutpage();
        const asmbElements = document.querySelectorAll(".vote-sec");
        const colors = ['#0dcaf0', '#799eff', 'blue', '#320398']
        asmbElements.forEach((element, idx) => {
            element.style.backgroundColor = colors[idx % 4];
        });
    });
    if (constituencydata) {
        return (
            <>
                <div className="userpage votepage grey-bg p-3">
                    <div className="board-title">Dashboard</div>
                    <div className="consti-info">
                        <div className="Consti-Sec d-flex p-2">
                            Election Type: <div className="consti-info px-3">{p.data.val[0].election_type_name}</div>
                        </div>
                        <div className="Consti-Sec d-flex p-2">
                            constituency_name: <div className="consti-info px-3">{constituencydata.constituency_name}</div>
                        </div>
                    </div>
                    <div class="grey-bg container-fluid">
                        <section id="minimal-statistics">
                            <div class="row">
                                <div class="col-xl-6 col-sm-6 col-12 py-3">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="fa-solid fa-user-tie icon-primary"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>50</h3>
                                                        <span>Number of Positions</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-12 py-3">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="fa-solid fa-users icon-warning"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>{constituencydata.Voter_id.length}</h3>
                                                        <span>Number of Candidates</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-12 py-3">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i className="fa-solid fa-user icon-success"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>{constituencydata.Votercount}</h3>
                                                        <span>Number of voters</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-12 py-3">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="fa-solid fa-user-check icon-danger"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>{constituencydata.Voted_list.length}</h3>
                                                        <span>Voters Voted</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6 col-12 py-3">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="align-self-center">
                                                        <i class="fa-solid fa-percent icon-skyBlue"></i>
                                                    </div>
                                                    <div class="media-body text-right">
                                                        <h3>92.30%</h3>
                                                        <span >Voting Percentage</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <a onClick={gotovote}><div className="btn-a"><button className="btn-vote px-3 py-2">Go to the Vote</button></div></a>
                        <div class='walkthrough-pagination'>
                            <NavLink to="/userpage/vote" className='dot'></NavLink>
                            <NavLink to="/userpage/voteboard" className='dot'></NavLink>
                            <NavLink to="/userpage/submit" className='dot'></NavLink>
                        </div>
                    </div>

                </div>
            </>
        );
    }
    else {
        return (
            <>
                <section id="x">
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

export default Voteboard;