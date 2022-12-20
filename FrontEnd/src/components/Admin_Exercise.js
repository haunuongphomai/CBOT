import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../public/css/adform.css";
export default function GetExercise() {
  const url = `http://localhost:8080/home/exercise/getAll`;
  const [exercise, setExercise] = useState(null);
  let content = [];

  useEffect(() => {
    Axios.get(url).then((res) => {
      setExercise(res.data);
    });
  }, [url]);

  if (exercise) {
    content = (
      <div className="data">
        {exercise.data.map((item) => {
          return (
            <div>
              <div>
                <h1>ID: {item.id} </h1>
              </div>
              <div>
                <h1>Intro 1</h1>
                <div className="font-css-admin">
                  {item.intro1.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Question 1</h1>
                <div className="font-css-admin">
                  {item.question1.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Answer 1</h1>
                <div className="font-css-admin">
                  {item.answer1.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <br></br>
              <div>
                <h1>Intro 2</h1>
                <div className="font-css-admin">
                  {item.intro2.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Question 2</h1>
                <div className="font-css-admin">
                  {item.question2.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Answer 2</h1>
                <div className="font-css-admin">
                  {item.answer2.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <br></br>
              <div>
                <h1>Intro 3</h1>
                <div className="font-css-admin">
                  {item.intro3.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Question 3</h1>
                <div className="font-css-admin">
                  {item.question3.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Answer 3</h1>
                <div className="font-css-admin">
                  {item.answer3.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <br></br>
              <div>
                <h1>Intro 4</h1>
                <div className="font-css-admin">
                  {item.intro4.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Question 4</h1>
                <div className="font-css-admin">
                  {item.question4.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Answer 4</h1>
                <div className="font-css-admin">
                  {item.answer4.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <br></br>
              <div>
                <h1>Intro 5</h1>
                <div className="font-css-admin">
                  {item.intro5.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Question 5</h1>
                <div className="font-css-admin">
                  {item.question5.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Answer 5</h1>
                <div className="font-css-admin">
                  {item.answer5.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <hr className="aline"></hr>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}
