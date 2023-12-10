import React from "react";
import "./Sidebar.css";
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <div className="userpage d-flex">
                <div className="backimage d-flex py-auto">
                    <div className="ContactBody m-auto">
                        <div class="container-a">
                            <h2 className="sec-name mb-3">Contact Us</h2>
                            <p className="desc ">
                                If you have any questions regarding privacy while using the Application, or have
                                questions about our practices, please contact us via email at <strong>walchandCollege@gmail.com </strong>
                            </p>
                            <br />
                            <div className="d-flex ">
                                <hr className="line-a"></hr>
                                <div className="or m-auto">OR</div>
                                <hr className="line-a"></hr>
                            </div>
                            <br />

                            <form className="m-3" action="">
                                <div class="inputbox d-flex m-auto">
                                    <label className="mx-2" for=""><img className="sec-icon p-1" src="../images/user.png" height="40px" width="40px"></img></label>
                                    <div className="inputB mx-2"><input type="text" name="name" placeholder="Username" /></div>
                                </div>
                                <br />
                                <div class="inputbox d-flex m-auto">
                                    <label className="mx-2" for=""><img className="sec-icon p-1" src="../images/phone.png" height="40px" width="40px"></img></label>
                                    <div className="inputB mx-2"><input type="phone" name="phone" placeholder="Phone" /></div>
                                </div>
                                <br />
                                <div class="inputbox d-flex m-auto">
                                    <label className="mx-2" for=""><img className="sec-icon p-1" src="../images/question.png" height="40px" width="40px"></img></label>
                                    <div className="mx-2"><textarea type="textarea" name="query" placeholder="Write your questions" /></div>
                                </div>
                                <br />
                                <br />
                                <input type="submit" name="" value="Submit" />
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;