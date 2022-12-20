const { query } = require("express");
const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function getAllExercise(){
    return router.get(
        "/", 
        (async (req, res) => {
            try {
                const query = db.collection("Exercise");
                let response = [];

                await query.get().then((data) => {
                    let docs = data.docs;

                    docs.map((doc) => {
                        const selectedItem = {
                            id: doc.data().id,
                            name: doc.data().name,
                            intro1: doc.data().intro1,
                            question1: doc.data().question1,
                            answer1: doc.data().answer1,
                            intro2: doc.data().intro2,
                            question2: doc.data().question2,
                            answer2: doc.data().answer2,
                            intro3: doc.data().intro3,
                            question3: doc.data().question3,
                            answer3: doc.data().answer3,
                            intro4: doc.data().intro4,
                            question4: doc.data().question4,
                            answer4: doc.data().answer4,
                            intro5: doc.data().intro5,
                            question5: doc.data().question5,
                            answer5: doc.data().answer5,
                        };

                        response.push(selectedItem);
                    });
                    return response;
                });

                return res.status(200).send({ status: "Sucess", data: response });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = getAllExercise;