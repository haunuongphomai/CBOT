import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBarAdmin from "../sidebar/NavBar_Admin";

// Cach viet 2
export default function PostForm() {
  const url = "http://localhost:8080/admin/exercise/add";
  const [name, setName] = useState("");
  const [intro1, setIntro1] = useState("");
  const [question1, setQuestion1] = useState("");
  const [answer1, setAnswer1] = useState("");

  const [intro2, setIntro2] = useState("");
  const [question2, setQuestion2] = useState("");
  const [answer2, setAnswer2] = useState("");

  const [intro3, setIntro3] = useState("");
  const [question3, setQuestion3] = useState("");
  const [answer3, setAnswer3] = useState("");

  const [intro4, setIntro4] = useState("");
  const [question4, setQuestion4] = useState("");
  const [answer4, setAnswer4] = useState("");

  const [intro5, setIntro5] = useState("");
  const [question5, setQuestion5] = useState("");
  const [answer5, setAnswer5] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeIntro1 = (event) => {
    const value = event.target.value;
    setIntro1(value);
  };
  const onChangeQuestion1 = (event) => {
    const value = event.target.value;
    setQuestion1(value);
  };
  const onChangeAnswer1 = (event) => {
    const value = event.target.value;
    setAnswer1(value);
  };

  const onChangeIntro2 = (event) => {
    const value = event.target.value;
    setIntro2(value);
  };
  const onChangeQuestion2 = (event) => {
    const value = event.target.value;
    setQuestion2(value);
  };
  const onChangeAnswer2 = (event) => {
    const value = event.target.value;
    setAnswer2(value);
  };

  const onChangeIntro3 = (event) => {
    const value = event.target.value;
    setIntro3(value);
  };
  const onChangeQuestion3 = (event) => {
    const value = event.target.value;
    setQuestion3(value);
  };
  const onChangeAnswer3 = (event) => {
    const value = event.target.value;
    setAnswer3(value);
  };

  const onChangeIntro4 = (event) => {
    const value = event.target.value;
    setIntro4(value);
  };
  const onChangeQuestion4 = (event) => {
    const value = event.target.value;
    setQuestion4(value);
  };
  const onChangeAnswer4 = (event) => {
    const value = event.target.value;
    setAnswer4(value);
  };

  const onChangeIntro5 = (event) => {
    const value = event.target.value;
    setIntro5(value);
  };
  const onChangeQuestion5 = (event) => {
    const value = event.target.value;
    setQuestion5(value);
  };
  const onChangeAnswer5 = (event) => {
    const value = event.target.value;
    setAnswer5(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.post(url, {
        name: name,
        intro1: intro1,
        question1: question1,
        answer1: answer1,
        intro2: intro2,
        question2: question2,
        answer2: answer2,
        intro3: intro3,
        question3: question3,
        answer3: answer3,
        intro4: intro4,
        question4: question4,
        answer4: answer4,
        intro5: intro5,
        question5: question5,
        answer5: answer5,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Add data successfully!");
    } catch {
      setError("Failed to add data!");
    }

    setLoading(false);
  }
  return (
    <>
      <NavBarAdmin />
      <Card>
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
        <Card.Body className="add-ex-css">
          <h1 className="text-center mb-3">Add Exercise</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Question category name </Form.Label>
              <Form.Control id="name" type="text" />
            </Form.Group>
            <br></br>
            <Form.Group onChange={onChangeIntro1}>
              <Form.Label>Intro 1</Form.Label>
              <Form.Control id="intro1" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion1}>
              <Form.Label>Question 1</Form.Label>
              <Form.Control id="question1" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer1}>
              <Form.Label>Answer 1</Form.Label>
              <Form.Control id="answer1" type="text" />
            </Form.Group>
            <br></br>
            <Form.Group onChange={onChangeIntro2}>
              <Form.Label>Intro 2</Form.Label>
              <Form.Control id="intro2" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion2}>
              <Form.Label>Question 2</Form.Label>
              <Form.Control id="question2" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer2}>
              <Form.Label>Answer 2</Form.Label>
              <Form.Control id="answer2" type="text" />
            </Form.Group>
            <br></br>
            <Form.Group onChange={onChangeIntro3}>
              <Form.Label>Intro 3</Form.Label>
              <Form.Control id="intro3" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion3}>
              <Form.Label>Question 3</Form.Label>
              <Form.Control id="question3" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer3}>
              <Form.Label>Answer 3</Form.Label>
              <Form.Control id="answer3" type="text" />
            </Form.Group>
            <br></br>
            <Form.Group onChange={onChangeIntro4}>
              <Form.Label>Intro 4</Form.Label>
              <Form.Control id="intro4" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion4}>
              <Form.Label>Question 4</Form.Label>
              <Form.Control id="question4" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer4}>
              <Form.Label>Answer 4</Form.Label>
              <Form.Control id="answer4" type="text" />
            </Form.Group>
            <br></br>
            <Form.Group onChange={onChangeIntro5}>
              <Form.Label>Intro 5</Form.Label>
              <Form.Control id="intro5" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion5}>
              <Form.Label>Question 5</Form.Label>
              <Form.Control id="question5" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer5}>
              <Form.Label>Answer 5</Form.Label>
              <Form.Control id="answer5" type="text" />
            </Form.Group>
            <br></br>
            <Button disabled={loading} type="submit">
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
