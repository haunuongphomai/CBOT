import React from "react";
import NavBar from "../sidebar/NavBar";
import SideBarEx from "../sidebar/SideBarEx";
import { BrowserRouter as Router } from "react-router-dom";

export default function home() {
  return (
    <>
      <Router>
        <NavBar />
        <SideBarEx />
      </Router>
    </>
  );
}