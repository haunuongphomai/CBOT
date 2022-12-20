const express = require ("express");
const app = express();
const serverInit = require("../config/config");

const addDashboard = require("../controllers/Admin/Dashboard/add");
const editAllDashboard = require("../controllers/Admin/Dashboard/editAll");
const editName = require("../controllers/Admin/Dashboard/editName");
const editTheory = require("../controllers/Admin/Dashboard/editTheory");
const editDeclare = require("../controllers/Admin/Dashboard/editDeclare");
const editExample = require("../controllers/Admin/Dashboard/editExample");
const delDashboard = require("../controllers/Admin/Dashboard/del.js");

const addExercise = require("../controllers/Admin/Exercise/add");
const editAllExercise = require("../controllers/Admin/Exercise/editAll");
const editQuestion1 = require("../controllers/Admin/Exercise/editQuestion1");
const editQuestion2 = require("../controllers/Admin/Exercise/editQuestion2");
const editQuestion3 = require("../controllers/Admin/Exercise/editQuestion3");
const editQuestion4 = require("../controllers/Admin/Exercise/editQuestion4");
const editQuestion5 = require("../controllers/Admin/Exercise/editQuestion5");
const editNameQuestion = require("../controllers/Admin/Exercise/editNameQuestion");
const delExercise = require("../controllers/Admin/Exercise/del");

const getDashboard = require("../controllers/Home/Dashboard/getDashboard");
const getAllDashboard = require("../controllers/Home/Dashboard/getAll");

const getExercise = require("../controllers/Home/Exercise/getExercise");
const getAllExercise = require("../controllers/Home/Exercise/getAll");

function route() {
    serverInit(app);

    // Admin
    // Dashboard
    app.use("/admin/dashboard/add", addDashboard());
    app.use("/admin/dashboard/editAll", editAllDashboard());
    app.use("/admin/dashboard/editName", editName());
    app.use("/admin/dashboard/editTheory", editTheory());
    app.use("/admin/dashboard/editDeclare", editDeclare());
    app.use("/admin/dashboard/editExample", editExample());
    app.use("/admin/dashboard/del", delDashboard());
    
    // Exercise
    app.use("/admin/exercise/editNameQuestion", editNameQuestion());
    app.use("/admin/exercise/add", addExercise());
    app.use("/admin/exercise/editAll", editAllExercise());
    app.use("/admin/exercise/editQuestion1", editQuestion1());
    app.use("/admin/exercise/editQuestion2", editQuestion2());
    app.use("/admin/exercise/editQuestion3", editQuestion3());
    app.use("/admin/exercise/editQuestion4", editQuestion4());
    app.use("/admin/exercise/editQuestion5", editQuestion5());
    app.use("/admin/exercise/del", delExercise());

    // Home
    // Dashboard
    app.use("/home/dashboard/getDashboard", getDashboard());
    app.use("/home/dashboard/getAll", getAllDashboard());

    // Exercise
    app.use("/home/exercise/getExercise", getExercise());
    app.use("/home/exercise/getAll", getAllExercise());
}

module.exports = route;