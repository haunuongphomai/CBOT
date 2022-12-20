const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function addExercise(){
    return router.post(
        "/", 
        (async (req, res) => {
            try {
                await db.collection('Exercise').doc(`/${Date.now()}/`).create({
                    id: Date.now(),
                    name: req.body.name,

                    intro1: req.body.intro1,
                    question1: req.body.question1,  
                    answer1: req.body.answer1,

                    intro2: req.body.intro2,
                    question2: req.body.question2,  
                    answer2: req.body.answer2,

                    intro3: req.body.intro3,
                    question3: req.body.question3,  
                    answer3: req.body.answer3,

                    intro4: req.body.intro4,
                    question4: req.body.question4,  
                    answer4: req.body.answer4,

                    intro5: req.body.intro5,
                    question5: req.body.question5,  
                    answer5: req.body.answer5,
                });

                return res.status(200).send({ status: "Sucess", msg: "Data Saved" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = addExercise;