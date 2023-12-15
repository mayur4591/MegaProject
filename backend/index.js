import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const router = express.Router();
import voterdata from "./schema/voter.js";
import electiontypedata from "./schema/typeofelection.js"
import constituencydata from "./schema/constituency.js"
import candidatedata from "./schema/candidate.js"
const app = express();
app.use(cors());
app.use(express.json());



//database connection



mongoose.set('strictQuery', false);
console.log('joii');
const DB = "mongodb+srv://anuragmagdum20129:megaproject@megadata.goxyllu.mongodb.net/";
mongoose.connect(DB).then(() => {
    console.log('connection sucess');
}).catch((err) => {
    console.log(err);
});




//fetch data


app.get('/voter/:adhar', async (req, res) => {

    const user = await voterdata.find({ voter_adhar: req.params.adhar });
    res.send(user);

});


//mobile verification

import { initClient } from 'messagebird';


app.post('/otprequest', async (req, res) => {
    const ph = req.body;
    const number = ph.ph_number;
    const messagebird = initClient('pgfVsKzPhZNrNd40hFhZ2Ctr');
    var params = {
        template: "your login otp is %token",
        timeout: 300
    };
    console.log("otpcheck");
    messagebird.verify.create(number, params, function (err, response) {
        if (err) {
            console.log('error');
            res.status(200).send({ "status": "failed" });
        }
        else {
            res.status(200).send({ "status": "success" });
            console.log('success');
        }
    });
});




//voter active election by using voter id

app.get('/activeelectionforuser/:pid', async (req, res) => {
    try {
        const user = await voterdata.find({ _id: req.params.pid });
        const data = user[0].type_of_election;

        const electionTypeArray = await Promise.all(data.map(async (item) => {
            const vid = item.type_id;
            const electiontype = await electiontypedata.find({ $and: [{ Active: true }, { _id: vid }] });

            // Check if electiontype has data before adding to the array
            if (electiontype && electiontype.length > 0) {
                return electiontype;
            } else {
                return null; // or any other value indicating empty data
            }
        }));

        // Filter out null values indicating empty data
        const filteredElectionTypeArray = electionTypeArray.filter(item => item !== null);
        // console.log(filteredElectionTypeArray);
        res.send(filteredElectionTypeArray);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


//getuserconstituency
app.get('/getuserconstituency', async (req, res) => {
    const { type_id, voterid } = req.query;

    try {
        const voter = await voterdata.findOne({ _id: voterid });

        if (!voter) {
            return res.status(404).json({ error: 'Voter not found' });
        }

        // Filter the type_of_election array based on type_id
        const filteredConstituencies = voter.type_of_election.filter(election => election.type_id === type_id);

        const constituency = await constituencydata.findOne({ _id: filteredConstituencies[0].c_id });

        res.send(constituency);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.get('/candidatedata/:cid', async (req, res) => {

    //console.log(req.params.cid);
    const user = await candidatedata.find({ _id: req.params.cid });
    // console.log(user)
    res.send(user);

});
app.get('/getconstituency', async (req, res) => {
    const { constituencyid } = req.query;

    //console.log(req.params.cid);
    const user = await constituencydata.findOne({ _id: constituencyid });
    //console.log(user)
    res.send(user);

});


//update voter list
app.post('/addvotetovoterlist', async (req, res) => {
    const { voterId, constituencyId } = req.query;

    try {
        await constituencydata.updateOne({ _id: constituencyId }, {
            $push: {
                Voted_list: {
                    Voter_id: voterId
                }
            }
        });
        return res.status(200).json({ status: 'success', message: 'Voter added to voted list' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/', () => {
    app.send("")
})
app.listen(5000, () => {
    console.log("app is runnning on 5000");
})