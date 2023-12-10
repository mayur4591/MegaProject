import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import AuthPage from "./pages/AuthPage";
import OtpPage from "./pages/OtpPage";
import UserPage from "./pages/UserPage";
import { ethers } from "ethers";
// import Home from "./components/Home";
// import SubmitVote from "./components/SubmitVote";

function App() {
  const [data, setdata] = useState({
    address: null,
    Balance: null,
  });

  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) =>
          accountChangeHandler(res[0])
        );
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          ...data,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
      Balance: null, // Reset balance when the account changes
    });

    // Setting a balance
    getbalance(account);
  };
  useEffect(() => {
    // Call the btnhandler function when the component mounts
    btnhandler();
  }, []); 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/userauthentication" element={<AuthPage />} />
        <Route path="/otpVerification" element={<OtpPage />} />
        <Route path="/userpage/*" element={<UserPage />}>
<<<<<<< HEAD
          <Route path="home" />
          <Route path="guidelines" />
          <Route path="vote" />
          <Route path="submit" />
          <Route path="contact" />
          <Route path="result" />
=======
          <Route path=""/>
          <Route path="dashboard"/>
          <Route path="guidelines"/>
          <Route path="vote"/>
          <Route path="submit"/>
          <Route path="contact"/>
          <Route path="result"/>
>>>>>>> 0c72794c87e1d4d1520945707123806d57481fc2
        </Route>
      </Routes>
    </div>
  );
}

export default App;
