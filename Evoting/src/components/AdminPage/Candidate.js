import React, { useEffect, useState } from "react";
import "./Candidate.css";
import { NavLink } from "react-router-dom";
import Web3 from "web3"; // Import Web3 library

const Candidate = () => {
  const [cname, setCName] = useState("");
  const [pname, setPName] = useState("");
  const [adharno, setAdharno] = useState("");
  const web3 = new Web3("http://localhost:7545");

  const contractAddress = "0xE25c5a19c25340208954CaA2dAdEcDA595CB58bB";

  const contractABI =  [
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
  const connectToWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access");
      }
    }
  };

  useEffect(() => {
    connectToWeb3();
  }, []);

  const addCandidateToBlockChain = async (_id,_name, _partyName) => {
    console.log(_name, _partyName);
    // console.log("In the function...");
    const gasLimit = 2000000;
    // try {
        // console.log(accounts);
      await myContract.methods
        .addCandidate(_id,_name, _partyName)
        .send({
          from: '0x9De08bC61dD87b0D2F762BE05cc77D28FB7bA183',
          gas: gasLimit
        });

      const candidateNames = await myContract.methods
        .getAllCandidatesNames()
        .call();

      console.log(candidateNames);

    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="adminpage col-10 mx-3 px-3">
        <div className="voteL-1">Add Candidates</div>
        <form className="mx-auto cad-form">
          <div class="row m-3">
            <div class="col">
              <input
                type="text"
                value={cname}
                class="form-control"
                placeholder="Name"
                onChange={(e) => {
                  setCName(e.target.value);
                }}
              />
            </div>
            <div class="col">
              <input
                value={pname}
                type="text"
                class="form-control"
                placeholder="Party Name"
                onChange={(e) => {
                  setPName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row m-3">
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Adhar Number"
                onChange={(e) => {
                    setAdharno(e.target.value);
                  }}
              />
            </div>
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div class="row m-3">
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Birth Year"
              />
            </div>
            <div class="col d-flex gender">
              <label className="m-2">Gender :</label>
              <input
                class="form-check-input position-static m-2"
                type="radio"
                name="blankRadio"
                id="blankRadio1"
                value="option1"
                aria-label="..."
              />
              Male
              <input
                class="form-check-input position-static m-2"
                type="radio"
                name="blankRadio"
                id="blankRadio1"
                value="option1"
                aria-label="..."
              />
              Female
              <input
                class="form-check-input position-static m-2"
                type="radio"
                name="blankRadio"
                id="blankRadio1"
                value="option1"
                aria-label="..."
              />
              Other
            </div>
          </div>
          <input
            className="mt-3"
            type="Submit"
            value="Create"
            onClick={() => addCandidateToBlockChain(adharno,cname,pname)}
          ></input>
        </form>
      </div>
    </>
  );
};

export default Candidate;

// import React from "react";
// import "./Candidate.css"; // Import your custom styles

// const Candidate = () => {
//   // Sample candidate data
//   const candidates = [
//     {
//       id: 1,
//       name: "John Doe",
//       party: "Unity Party",
//       position: "President",
//       imageUrl: "path/to/image1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       party: "Liberty Party",
//       position: "Vice President",
//       imageUrl: "path/to/image2.jpg",
//     },
//     // Add more candidates as needed
//   ];

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Candidate List</h2>
//       <div className="row">
//         <div className="col-lg-4 mb-4">
//           <div className="card candidate-card shadow">
//             <img
//               src={candidates[0].imageUrl}
//               alt={candidates[0].name}
//               className="card-img-top"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{candidates[0].name}</h5>
//               <p className="card-text">{candidates[0].party}</p>
//               <p className="card-text">{candidates[0].position}</p>
//               <div className="d-flex justify-content-between align-items-center mt-3">
//                 <button className="btn btn-info btn-sm">

//                   Details
//                 </button>
//                 <button className="btn btn-success btn-sm">

//                   Vote
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Repeat the above card structure for each candidate */}

//       </div>
//     </div>
//   );
// };

// export default Candidate;
