import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "./Vote.css";
import axios from "axios";
import Web3 from "web3"; // Import Web3 library
const CadInfo = (p) => {
  const candidateid = p.data.Cand_id;
  const voterid = p.voterdata;
  const constituencyid = p.conid;
  const web3 = new Web3("http://localhost:7545");
  const contractAddress = "0xDcB131B7bA894dDE7aadAfE05feF8aEc821B7A66";

  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "candidateId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "candidateNum",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "candidateName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "candidateParty",
          "type": "string"
        }
      ],
      "name": "Registered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "candidate",
          "type": "string"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "candidateCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "candidateName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "candidateParty",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "stopTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getTotalCandidatesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAllCandidatesNames",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "candidateName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "candidateParty",
              "type": "string"
            }
          ],
          "internalType": "struct Election.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "receiveFunds",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_partyName",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "setStop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "setStart",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateId",
          "type": "uint256"
        }
      ],
      "name": "Vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getResult",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "id",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "candidateName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "candidateParty",
              "type": "string"
            }
          ],
          "internalType": "struct Election.Candidate",
          "name": "candidate",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
  const myContract = new web3.eth.Contract(contractABI, contractAddress);

  const [CanData, setCanData] = useState({});
  const [condata, setcondata] = useState({});
  
  const callAboutpage = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/candidatedata/${candidateid}`
      );
      const res1 = await axios.get("http://localhost:5000/getconstituency", {
        params: { constituencyid },
      });
      const dataofvoter = res.data;
      const datacon = res1.data;
      setCanData(dataofvoter);
      setcondata(datacon);
    } catch (err) {
      console.log(err);
    }
  };

  const connectToWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error('User denied account access');
      }
    }
  };
  
    const voteForCandidate = async (index) => {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      console.log("Metamask Address is....",accounts);
  
      try {
      await myContract.methods
      .Vote(index)
      .send({ from: '0x1d67Feedc670dF2bAB7A42a8Fc1A3606f6e42070'});
      } catch (err) {
        
        window.alert("You have alerady voted.....");
    
      }

    };

const getAllCandidates = async ()=>
{
  const res = await myContract.methods.getAllCandidatesNames().call();
  console.log(res);

  return res;
}

  const checkvotevalid = async () => {
    let isValidVoter = false;
    let isvoted = false;

    if (p.voterlist && p.voterlist.length > 0) {
      for (const voter of p.voterlist) {
        if (voter.vid === voterid) {
          isValidVoter = true;
          if (condata.Voted_list && condata.Voted_list.length > 0) {
            for (const voted of condata.Voted_list) {
              if (voted.Voter_id === voterid) {
                isvoted = true;
                break;
              }
            }
          }
          break; // Break out of the loop if the condition is true
        }
      }

      if (!isValidVoter) {
        window.alert("You are not a valid voter");
      } else {
        if (isvoted) {
          window.alert("You are already voted");
        } else {
          try {
            const res = await axios.post(
              "http://localhost:5000/addvotetovoterlist",
              null,
              {
                params: { voterId: voterid, constituencyId: constituencyid },
              }
            ); // You can handle the response from the server here

            //write from here
            //voteForCandidate();

            console.log(res);
          } catch (err) {
            console.error(err);
            window.alert("Error while voting");
          }
        }
      }
      window.location.reload();
    } else {
      console.log("Voter list is empty");
    }
  };

  useEffect(() => {
    connectToWeb3();
    callAboutpage();
  }, []);

  

  if (CanData && CanData.length > 0) {
    return (

      <>
        <div className="table-data d-flex ">
          <div className="col-2 m-auto">
            <div className="cad-name">{CanData[0].candidate_name} </div>
            <div className="btn-sm cad-info col-6 mx-auto my-2">View More</div>
          </div>
          <div className="col-5 m-auto">{CanData[0].partyname} </div>
          <div className="col-2 m-auto">
            <img className="" src="../images/logo1.png"></img>
          </div>
          <div className="col-3 " onClick={checkvotevalid}>
            <a className="vote-btn-a">
              <div className="btn-sm vote-btn col-4 m-auto">Vote</div>
            </a>
          </div>
        </div>
        <hr className="vline-1 col-11 m-auto"></hr>
      </>
    );
  } else {
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
    );
  }
};

export default CadInfo;
