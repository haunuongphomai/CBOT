import React from "react";
import NavBarAdmin from "../sidebar/NavBar_Admin";
import { BrowserRouter as Router } from "react-router-dom";
import AdminExercise from "../components/Admin_Exercise";
import "../public/css/adform.css";

export default function home() {
  return (
    <>
      <Router>
        <NavBarAdmin />
        <div className="bd-admin">
          <a href="http://localhost:3000/add-exercise">
            <button className="button">Add</button>
          </a>
          <a href="http://localhost:3000/update-exercise">
            <button className="button button-mid">Update</button>
          </a>
          <a href="http://localhost:3000/delete-exercise">
            <button className="button">Delete</button>
          </a>
        </div>
        <AdminExercise />
      </Router>
    </>
  );
}