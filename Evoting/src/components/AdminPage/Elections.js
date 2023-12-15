import React from "react";
import { NavLink } from "react-router-dom";
import "./Elections.css";

const Elections = () => {
  return (
    <div className="container ">
      <div className="container-title mx-3">Current Elections</div>
      <div className="mt-5">
        <div className="col-lg-8 col-xs-10 m-3">
          <div className="card election-card shadow">
            <img className="position-absolute top-50 start-0 translate-middle sec-ic p-1 ic" src="../images/bookmark.png" height="80px" width="80px" ></img>
            <div className="card-body d-flex">
              <div className=" col-4">
                <h5 className="card-title elect-name mx-3 ">Gram Panchayat</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Start Time:</strong> 26 Oct 2023, 10:00 AM</li>
                <li className="list-group-item"><strong>End Time:</strong> 26 Oct 2023, 5:00 PM</li>
              </ul>
              <div className="text-center">
                <NavLink to="/admin/addCandidate">
                  <button className="btn-add px-3 py-2 btn-primary btn-sm">
                    Add Candidates
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Add more election cards as needed */}
        <div className="col-lg-8 col-xs-10 m-3">
          <div className="card election-card shadow">

            <img className="position-absolute top-50 start-0 translate-middle sec-ic p-1 ic" src="../images/bookmark.png" height="80px" width="80px" ></img>

            <div className="card-body d-flex">
              <div className=" col-4">
                <h5 className="card-title elect-name mx-3 ">Gram Panchayat</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Start Time:</strong> 26 Oct 2023, 10:00 AM</li>
                <li className="list-group-item"><strong>End Time:</strong> 26 Oct 2023, 5:00 PM</li>
              </ul>
              <div className="text-center">
                <NavLink to="/admin/addCandidate">
                  <button className="btn-add px-3 py-2 btn-primary btn-sm">
                    Add Candidates
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elections;
