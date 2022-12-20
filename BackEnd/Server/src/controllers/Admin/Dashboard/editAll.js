const express = require ("express");
const admin = require("firebase-admin");
const router = express.Router();
const db = admin.firestore();
function editDashboard(){
    return router.put(
        "/:id", 
        (async (req, res) => {
            try {
                const reqDoc = db.collection("Dashboard").doc(req.params.id);
                await reqDoc.update({
                    name: req.body.name,
                    theory: req.body.theory,
                    declare: req.body.declare,
                    example: req.body.example,
                });

                return res.status(200).send({ status: "Sucess", msg: "Data Updated" });
            } catch (error) {
                console.log(error)
                return res.status(500).send({ status: "Failed", msg: error });
            }
        })
    )
}

module.exports = editDashboard;