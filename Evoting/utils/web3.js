const { Web3, providers } = require('web3');

// Use the HTTPProvider class to create a provider
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

const contractAddress = "0xE25c5a19c25340208954CaA2dAdEcDA595CB58bB";

const contractAbi = [
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
   // Your smart contract ABI
   const contract = new web3.eth.Contract(contractAbi, contractAddress);
   
   const getContractBalance = async () => {
    try {
      const balance = await web3.eth.getBalance(contractAddress);
      console.log(`Contract Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
    } catch (error) {
      console.error('Error fetching contract balance:', error);
    }
  };
//   console.log(`Contract Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
const sendFunds = async () => {
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    // Send funds to the contract using the receiveFunds function
    await contract.methods.receiveFunds().send({ from: '0x49dad007a09C576c71A05fcEE490291b4Ff1833E', value: web3.utils.toWei('50', 'ether') });

    console.log('Funds sent successfully!');
};

const doVote = async () =>{
      const accounts = await web3.eth.getAccounts();
      await contract.methods.Vote(1).send({ from: accounts[8] });  
}

const result = async () => {
  const accounts = await web3.eth.getAccounts();
  const gasEstimate = await contract.methods.getResult().estimateGas({ from: accounts[0] });
  const res = await contract.methods.getResult().call();
  console.log('Candidate Name:', res);
};


const addCan = async () => {
  const accounts = await web3.eth.getAccounts();

  try {
    // Increase the gas limit
    const gasLimit = 2000000;

    // Add the first candidate
    await contract.methods.addCandidate("Modi","BJP").send({ from: accounts[0], gas: gasLimit });

    // Add the second candidate
    await contract.methods.addCandidate("Rahul","Congress").send({ from: accounts[1], gas: gasLimit });

    // Add the third candidate
    await contract.methods.addCandidate("Kejriwal","AAP").send({ from: accounts[2], gas: gasLimit });

    console.log('All candidates added successfully....!');
  } catch (error) {
    console.error('Error adding candidates: ', error);
  }
};

// Assuming 'contract' is your deployed contract instance

const getCandidatesCount = async () => {
  try {
    // Call the getCandidatesCount function
    const candidateNames = await contract.methods.getAllCandidatesNames().call();
    const accounts = await web3.eth.getAccounts();

    console.log(candidateNames);
    // Loop through the array and print each candidate name
    // for (let i = 0; i < candidateNames.length; i++) {
    //   console.log(`Candidate ${i + 1}: ${candidateNames[i]}`);
    // }
  } catch (error) {
    console.error('Error retrieving candidates count: ', error);
  }
};

// Example usage
//addCan();
getCandidatesCount();
//doVote();
//result();


// Example usage




