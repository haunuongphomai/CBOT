import React from "react";
import "../public/css/navbar.css";
function Logo() {
  return (
    <> 
      <div className="ft text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="http://cit.ctu.edu.vn//">
          Can Tho University
        </a>
      </div>
    </>
  );
}

export default Logo;
