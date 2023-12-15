import mongoose from "mongoose";
const constituency_schema = new mongoose.Schema({
    constituency_name: {
        type: String,
        required: true
    },
    pinid: {
        type: Number,
        required: true
    },
    Votercount: {
        type: Number,
        required: true
    },
    Malevotercount: {
        type: Number,
        required: true
    },
    Femalevotercount: {
        type: Number,
        required: true
    },
    Voter_id: [
        {
            vid: {
                type: String,
                required: true
            }
        }
    ],
    Candidate_id: [
        {
            Cand_id: {
                type: String,
                required: true
            }
        }
    ],
    Voted_list: [
        {
            Voter_id: {
                type: String,
                required: true
            }
        }
    ],
});
const constituencydata = mongoose.model('constituency', constituency_schema);
export default constituencydata;
