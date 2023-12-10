// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract Election {
    
    struct Candidate{
        address id;
        uint voteCount;
        string candidateName;
    }

    event Registered(address candidateId,uint256 candidateNum,string candidateName);
    event Voted(address voter,address candidate);

    mapping (address => bool) public  voters;

    mapping (uint=> Candidate) public  candidates;

    address ecadmin;

    uint public  candidateCount;
    uint256 public  startTime;
    uint256 public  stopTime;

    constructor(){
        ecadmin=msg.sender;
    }

    modifier  ecAdminOnly()
    {
        require(msg.sender==ecadmin,"EC admin only operation.");
        _;
    }

    function addCandidate(string memory _name) public {
        bool candidateExists = false;
        uint candidateIndex=1;
        for (uint i = 1; i <= candidateCount; i++) {
            if (candidates[i].id == msg.sender) {
                candidateExists = true;
                candidateIndex = i;
                break;
            }
        }
        
        if (candidateExists) {
            candidates[candidateIndex].candidateName = _name;
        } else {
            candidateCount++;
            candidates[candidateCount] = Candidate(msg.sender, 0, _name);
        }

        emit Registered(msg.sender, candidateCount, _name);
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
        require(block.timestamp > startTime,"Election not started");
        require(block.timestamp <= stopTime,"Election is over");
        require(voters[msg.sender] == false,"Already voted");
        require(candidateCount>0,"There are no Candidates to votes");
        require(_candidateId<=candidateCount && _candidateId>0,"Provide a valid ID");
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit Voted(msg.sender, candidates[_candidateId].id);
    }

    function getResult() public view returns (Candidate memory candidate) {
        require(block.timestamp >= stopTime,"Election yet to finish");
        require(candidateCount>0,"There are no candidates avalable");
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
