import React from "react";
import Sidebar from "../sidebar/SideBar";
import NavBar from "../sidebar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

export default function home() {
  return (
    <>
      <Router>
        <NavBar />
        <Sidebar />
      </Router>
    </>
  );
}
