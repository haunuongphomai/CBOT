import "../public/css/navbar.css";
import React, { useEffect, useState, useRef } from "react";
import { publicRequest } from "./getContent";

export default function SideBar() {
  const [exercise, setExercise] = useState(null);
  const [contents, setContents] = useState(null);
  let content = [];
  let result = null;

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  useEffect(() => {
    const getSideBar = async () => {
      try {
        const res = await publicRequest.get(`/home/exercise/getAll`);
        setExercise(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSideBar();
  }, []);

  async function test(id) {
    try {
      const res = await publicRequest.get(`/home/exercise/getExercise/${id}`);
      setContents(res.data);
      setAnswer1(res.data.data.answer1);
      setAnswer2(res.data.data.answer2);
      setAnswer3(res.data.data.answer3);
      setAnswer4(res.data.data.answer4);
      setAnswer5(res.data.data.answer5);
    } catch (err) {
      console.log(err);
    }
  }

  if (exercise) {
    content = (
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {exercise.data.map((item) => {
            return (
              <>
                <button className="button2" onClick={() => test(item.id)}>
                  <span style={{ color: "#FFFFFF" }}>{item.name}</span>
                </button>
              </>
            );
          })}
        </ul>
      </nav>
    );
  }

  function submit1() {
    if (inputRef1.current.value) {
      if (inputRef1.current.value.trim() === answer1) {
        alert("Correct");
        return;
      }
      alert("Incorrect");
      return;
    }
  }

  function submit2() {
    if (inputRef2.current.value) {
      if (inputRef2.current.value.trim() === answer2) {
        alert("Correct");
        return;
      }
      alert("Incorrect");
      return;
    }
  }

  function submit3() {
    if (inputRef3.current.value) {
      if (inputRef3.current.value.trim() === answer3) {
        alert("Correct");
        return;
      }
      alert("Incorrect");
      return;
    }
  }

  function submit4() {
    if (inputRef4.current.value) {
      if (inputRef4.current.value.trim() === answer4) {
        alert("Correct");
        return;
      }
      alert("Incorrect");
      return;
    }
  }

  function submit5() {
    if (inputRef5.current.value) {
      if (inputRef5.current.value.trim() === answer5) {
        alert("Correct");
        return;
      }
      alert("Incorrect");
      return;
    }
  }

  if (contents) {
    result = (
      <nav className="nav-content">
        <div className="form-css">
          <br></br>
          <h1>{contents.data.name}</h1>
          <br></br>
          <div className="question">
            <h4>Introduction 1</h4>
            <h4 style={{ color: "blue" }}>{contents.data.intro1}</h4>
            <br></br>
            <div>
              <h4>Question 1</h4>
              {contents.data.question1
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <div>
            <div>
              <span className="yourAnswer">Your answer:</span>
              <input
                type="Text"
                className="textfield"
                id="answer-input"
                ref={inputRef1}
              />
              <span className="sp-submit">
                <button className="button" onClick={() => submit1()}>
                  Submit
                </button>
              </span>
            </div>
          </div>
          <hr className="aline"></hr>
          <br></br>
          <div className="question">
            <h4>Introduction 2</h4>
            <h4 style={{ color: "blue" }}>{contents.data.intro2}</h4>
            <br></br>
            <div>
              <h4>Question 2</h4>
              {contents.data.question2
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <div>
            <div>
              <span className="yourAnswer">Your answer:</span>
              <input
                type="Text"
                className="textfield"
                id="answer-input"
                ref={inputRef2}
              />
              <span className="sp-submit">
                <button className="button" onClick={() => submit2()}>
                  Submit
                </button>
              </span>
            </div>
          </div>
          <hr className="aline"></hr>
          <br></br>
          <div className="question">
            <h4>Introduction 3</h4>
            <h4 style={{ color: "blue" }}>{contents.data.intro3}</h4>
            <br></br>
            <div>
              <h4>Question 3</h4>
              {contents.data.question3
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <div>
            <div>
              <span className="yourAnswer">Your answer:</span>
              <input
                type="Text"
                className="textfield"
                id="answer-input"
                ref={inputRef3}
              />
              <span className="sp-submit">
                <button className="button" onClick={() => submit3()}>
                  Submit
                </button>
              </span>
            </div>
          </div>
          <hr className="aline"></hr>
          <br></br>
          <div className="question">
            <h4>Introduction 4</h4>
            <h4 style={{ color: "blue" }}>{contents.data.intro4}</h4>
            <br></br>
            <div>
              <h4>Question 4</h4>
              {contents.data.question4
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <div>
            <div>
              <span className="yourAnswer">Your answer:</span>
              <input
                type="Text"
                className="textfield"
                id="answer-input"
                ref={inputRef4}
              />
              <span className="sp-submit">
                <button className="button" onClick={() => submit4()}>
                  Submit
                </button>
              </span>
            </div>
          </div>
          <hr className="aline"></hr>
          <br></br>
          <div className="question">
            <h4>Introduction 5</h4>
            <h4 style={{ color: "blue" }}>{contents.data.intro5}</h4>
            <br></br>
            <div>
              <h4>Question 5</h4>
              {contents.data.question5
                .replaceAll("\\&n", "\n")
                .replaceAll("\\&t", "\t")}
            </div>
          </div>
          <br></br>
          <div>
            <div>
              <span className="yourAnswer">Your answer:</span>
              <input
                type="Text"
                className="textfield"
                id="answer-input"
                ref={inputRef5}
              />
              <span className="sp-submit">
                <button className="button" onClick={() => submit5()}>
                  Submit
                </button>
              </span>
            </div>
          </div>
          <hr className="aline"></hr>
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
          <div>Welcome to C language exercise.</div>
          <div className="mt-3">Whether you are an experienced programmer or not, this site is for everyone who wants to learn the C programming language.</div>
          <div className="mt-3">No need to download anything - Just click on the Assignment Title you want to study on the left hand side. Good luck!</div>
          <div className="mt-3">Each section consists of 5 very easy questions. You should do it yourself to complete it.</div>
          <h2 className="mt-5">Course C includes:</h2>
          <h4>Lesson</h4>
          <h4 className="mb-5">Exercise</h4>
          <a class="btn btn-primary" href="http://localhost:3000" role="button">Back to the course</a>
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
