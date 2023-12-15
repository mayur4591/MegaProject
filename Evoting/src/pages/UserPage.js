import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import Vote from "../components/Vote";
import SubmitVote from "../components/SubmitVote";
import Guide from "../components/Guide";
import Voteboard from "../components/Voteboard";
import Result from "../components/Result";
import { ethers } from 'ethers';

const UserPage = () => {
  
    const location = useLocation();
    const vid = location.state ? location.state.vid : "656ebbdb423494088136cdc3";
    const condata = location.state;

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

      const getMetamaskAddress = async () => {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          
          // The user's Metamask address is available in the 'accounts' array
          const userAddress = accounts[0];
          console.log("User's Metamask Address:", userAddress);
        } catch (error) {
          console.error("Error getting Metamask address:", error);
        }
      };
      
      useEffect(() => {
        // Call the btnhandler function when the component mounts
        //btnhandler();
        getMetamaskAddress();
      }, []); 

      return (
        <>
            <div className="userpage d-flex">
                <Sidebar />
                <div className="mainpage col-10">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/guidelines" element={<Guide />} />
                            <Route path="/vote" element={<Vote data={vid} />} />
                            <Route path="/voteboard" element={<Voteboard data={condata} />} />
                            <Route path="/submit" element={<SubmitVote data={condata} />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/result" element={<Result/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;