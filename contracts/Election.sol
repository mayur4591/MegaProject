// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract Election {
    struct Candidate{
        string id;
        uint voteCount;
        string candidateName;
        string candidateParty;
    }
    event Registered(string candidateId,uint256 candidateNum,string candidateName,string candidateParty);
    event Voted(address voter,string candidate);
    mapping (address => bool) public  voters;
    mapping (uint=> Candidate) public  candidates;
    address ecadmin;
    uint public  candidateCount;
    uint256 public  startTime;
    uint256 public  stopTime;

    function getTotalCandidatesCount() public view returns (uint) {
        return candidateCount;
    }

    function getAllCandidatesNames() public view returns (Candidate[] memory) {
        Candidate[] memory candidateNames = new Candidate[](candidateCount);

        for (uint i = 1; i <= candidateCount; i++) {
            candidateNames[i - 1] = candidates[i];
        }

        return candidateNames;
    } 

    constructor(){
        ecadmin=msg.sender;
    }

    modifier  ecAdminOnly()
    {
        require(msg.sender==ecadmin,"EC admin only operation.");
        _;
    }

    function receiveFunds() external payable {
        // Perform any actions or logic you want when the contract receives Ether
        emit Received(msg.sender, msg.value);
    }

    event Received(address indexed sender, uint256 value);

    function addCandidate(string memory _id,string memory _name,string memory _partyName) public {
        bool candidateExists = false;
        uint candidateIndex=1;
        for (uint i = 1; i <= candidateCount; i++) {
            if (keccak256(abi.encodePacked(candidates[i].id)) == keccak256(abi.encodePacked(_id))) {
                candidateExists = true;
                candidateIndex = i;
                break;
            }
        }
        
        if (candidateExists) {
            candidates[candidateIndex].candidateName = _name;
            candidates[candidateIndex].candidateParty = _partyName;
        } else {
            candidateCount++;
            candidates[candidateCount] = Candidate(_id, 0, _name,_partyName);
        }

        emit Registered(_id, candidateCount, _name,_partyName);
    }

    function setStop(uint256 num) external ecAdminOnly {
        require(num > block.timestamp && num > startTime,"Stop at later time");
        stopTime = num;
    }

    function setStart(uint256 num) external ecAdminOnly {
        require(num >= block.timestamp,"Stop at earlier time");
        startTime = num;
    }

    function Vote(uint _candidateId) public {
        // require(block.timestamp > startTime,"Election not started");
        // require(block.timestamp <= stopTime,"Election is over");
        require(voters[msg.sender] == false,"Already voted");
        // require(candidateCount>0,"There are no Candidates to votes");
        // require(_candidateId<=candidateCount && _candidateId>0,"Provide a valid ID");
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        
        emit Voted(msg.sender, candidates[_candidateId].id);
    }

    function getResult() public view returns (Candidate memory candidate) {
        // require(block.timestamp >= stopTime,"Election yet to finish");
        // require(candidateCount>0,"There are no candidates avalable");
        uint256 c;
        uint256 max = 0;

        for(uint i = 1; i <= candidateCount; i++) {
            if(candidates[i].voteCount > max) {
                max = candidates[i].voteCount;
                c = i;
            }
        }

        return candidates[c];
    }
}
