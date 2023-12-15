import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.css";
import "./Vote.css";
import { NavLink, useNavigate } from "react-router-dom";
const Vote = (p) => {

    const vid = p.data;

    const [userData, setUserData] = useState({});
    const history = useNavigate();
    const callAboutpage = async (e) => {
        try {
            const res = await axios.get(`http://localhost:5000/activeelectionforuser/${vid}`);
            const dataofvoter = res.data;
            setUserData(dataofvoter);
            //console.log(userData);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        callAboutpage();
        const asmbElements = document.querySelectorAll(".asmb");
        const colors = ['#0dcaf0', '#799eff', 'blue', '#320398']
        asmbElements.forEach((element, idx) => {
            element.style.backgroundColor = colors[idx % 4];
        });
    }, [userData]);



    if (userData) {
        return (
            <>
                <div className="userpage votepage">
                    <div className="voteL-1 text-box">Election Assembly</div>
                    {
                        Object.values(userData).map((val, ind) => {
                            const navigateToVoteBoard = () => {
                                // Use the history object to navigate and pass state
                                console.log(vid + "dkdnj");
                                history('/userpage/voteboard', { state: { vid, val } });
                            };
                            return (
                                <>
                                    <a className="consti p-3" onClick={navigateToVoteBoard}>
                                        <div className="asmb col-10 d-flex m-auto">
                                            <div className="asmb-name col-11">{val[0].election_type_name}123
                                                <img className="asmb-img" src={`../images/${val[0].election_type_name}.png`} height="50px" width="40px" />
                                            </div>
                                            <div className="next-btn m-auto"><img className="sec-icon p-1" src="../images/next1.png" height="40px" width="40px"></img></div>
                                        </div>
                                    </a>
                                </>
                            );
                        })
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

export default Vote;