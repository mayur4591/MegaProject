import React,{ useState, useEffect }  from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../../components/AdminPage/Sidebar";
import Home from "../../components/AdminPage/Home";
import Candidate from "../../components/AdminPage/Candidate";
import Elections from "../../components/AdminPage/Elections";
import Result from "../../components/AdminPage/Result";
import { ethers } from 'ethers';


const AdminPage = () => {
    const [data, setdata] = useState({
        address: null,
        Balance: null,
      });

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
                <Sidebar/>
                <div className="mainpage col-10">
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Home" element={<Home/>} />
                        <Route path="/Elections" element={<Elections/>} />
                        <Route path="/addCandidate" element={<Candidate/>} />
                        <Route path="/result" element={<Result/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPage;