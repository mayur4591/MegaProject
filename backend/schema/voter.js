import mongoose from "mongoose";
const voter_schema = new mongoose.Schema({
    voter_name: {
        type: String,
        required: true
    },
    voter_adhar: {
        type: String,
        required: true
    },
    votercard_id: {
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
    type_of_election: [
        {
            type_id: {
                type: String,
                required: true
            },
            c_id: {
                type: String,
                required: true
            }
        }
    ],
});
const voterdata = mongoose.model('voter', voter_schema);
export default voterdata;
