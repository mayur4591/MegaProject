import mongoose from "mongoose";
const candidate_schema = new mongoose.Schema({
    candidate_name: {
        type: String,
        required: true
    },
    candidate_id: {
        type: String,
        required: true
    },
    candidate_adhar: {
        type: String,
        required: true
    },
    candidatevotercaed_id: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Birthyear: {
        type: Number,
        required: true
    },
    partyname: {
        type: String,
        required: true
    },
    votecount: {
        type: String,
        required: true
    },

});
const candidatedata = mongoose.model('candidate', candidate_schema);
export default candidatedata;
