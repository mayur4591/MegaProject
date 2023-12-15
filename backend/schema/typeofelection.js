import mongoose from "mongoose";
const electiontype_schema = new mongoose.Schema({
    election_type_name: {
        type: String,
        required: true
    },
    toatalvoter: {
        type: Number,
        required: true
    },
    Active: {
        type: Boolean,
        required: true
    },
    constituency: [
        {
            c_id: {
                type: String,
                required: true
            }
        }
    ],
});
const electiontypedata = mongoose.model('election_type', electiontype_schema);
export default electiontypedata;
