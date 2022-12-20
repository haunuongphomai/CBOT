import "../public/css/navbar.css";
import React, { useEffect, useState } from "react";
import { publicRequest } from "./getContent";

export default function SideBar() {
  const [dashboard, setDashboard] = useState(null);
  const [contents, setContents] = useState(null);
  let content = [];
  let result = null;
  let dcl = null;
  let exp = null;

  useEffect(() => {
    const getSideBar = async () => {
      try {
        const res = await publicRequest.get(`home/dashboard/getAll`);
        setDashboard(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSideBar();
  }, []);

  async function test(id) {
    try {
      const res = await publicRequest.get(`home/dashboard/getDashboard/${id}`);
      setContents(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (dashboard) {
    content = (
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {dashboard.data.map((item) => {
            console.log(typeof item);
            return (
              <button className="button2" onClick={() => test(item.id)}>
                {item.name}
              </button>
            );
          })}
        </ul>
      </nav>
    );
  }

  if (contents) {
    if (contents.data.declare != "") {
      dcl = (
        <div className="dcl">
          <h2>Declare</h2>
          <div>
            {contents.data.declare
              .replaceAll("\\&n", "\n")
              .replaceAll("\\&t", "\t")}
          </div>
        </div>
      );
    }

    if (contents.data.example != "") {
      exp = (
        <div className="exp">
          <h2>Example</h2>
          <div>
            {contents.data.example
              .replaceAll("\\&n", "\n")
              .replaceAll("\\&t", "\t")}
          </div>
        </div>
      );
    }

    result = (
      <nav className="nav-content">
        <div className="form-css">
          <br></br>
          <div>
            <h1>{contents.data.name}</h1>
          </div>
          <br></br>
          <br></br>
          <div className="theory">
            <h2>Theory</h2>
            <div>
              {contents.data.theory
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <br></br>
          {dcl}
          <br></br>
          <br></br>
          {exp}
          <br></br>
          <br></br>
        </div>
      </nav>
    );
  } else {
    result = (
      <div>
        <h1 className="mt-5">Welcome to our course</h1>
        <div className="form-css mt-5">
          <div>Welcome to the chatbot-enabled C tutorial.</div>
          <div className="mt-3">Whether you are an experienced programmer or not, this site is for everyone who wants to learn the C programming language.</div>
          <div className="mt-3">No need to download anything - Just click on the Title you want to study on the left hand side. Good luck!</div>
          <div className="mt-3">If you have questions related to the lesson, the chatbot will assist you in the lower right corner of the screen.</div>
          <h2 className="mt-5">Course C includes:</h2>
          <h4>Lesson</h4>
          <h4 className="mb-5">Exercise</h4>
          <a class="btn btn-primary" href="http://localhost:3000/exercise" role="button">Start the Exercise</a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {content}
      <div className="content">{result}</div>
    </div>
  );
}
