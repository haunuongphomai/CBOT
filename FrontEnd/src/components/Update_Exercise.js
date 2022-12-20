import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBarAdmin from "../sidebar/NavBar_Admin";

// Cach viet 1
export default function PostForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("all");
  const [type, setType] = useState("1");

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

  const url = `http://localhost:8080/admin/exercise/editNameQuestion/${id}`;
  const url1 = `http://localhost:8080/admin/exercise/editQuestion1/${id}`;
  const url2 = `http://localhost:8080/admin/exercise/editQuestion2/${id}`;
  const url3 = `http://localhost:8080/admin/exercise/editQuestion3/${id}`;
  const url4 = `http://localhost:8080/admin/exercise/editQuestion4/${id}`;
  const url5 = `http://localhost:8080/admin/exercise/editQuestion5/${id}`;
  const urlall = `http://localhost:8080/admin/exercise/editAll/${id}`;

  const onChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };
  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const onChangeNumber = (event) => {
    const value = event.target.value;
    setNumber(value);
  };
  const onChangeType = (event) => {
    const value = event.target.value;
    setType(value);
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

  // const onChangeIntro = (event) => {
  //   const value = event.target.value;
  //   setIntro(value);
  // };
  // const onChangeQuestion = (event) => {
  //   const value = event.target.value;
  //   setQuestion(value);
  // };
  // const onChangeAnswer = (event) => {
  //   const value = event.target.value;
  //   setAnswer(value);
  // };

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   e.target.reset();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     Axios.put(url, {
  //       name: name,
  //       question: question,
  //       answer: answer,
  //     }).then((res) => {
  //       console.log(res.data);
  //     });
  //     alert("Update data successfully!");
  //   } catch {
  //     setError("Failed to add data!");
  //   }
  //   setLoading(false);
  // }

  async function handleSubmitUpdateName(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url, {
        name: name,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update question category name successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion1(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url1, {
        intro1: intro1,
        question1: question1,
        answer1: answer1,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update the content of question 1 successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion2(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url2, {
        intro2: intro2,
        question2: question2,
        answer2: answer2,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update the content of question 2 successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion3(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url3, {
        intro3: intro3,
        question3: question3,
        answer3: answer3,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update the content of question 3 successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion4(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url4, {
        intro4: intro4,
        question4: question4,
        answer4: answer4,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update the content of question 4 successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion5(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url5, {
        intro5: intro5,
        question5: question5,
        answer5: answer5,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update the content of question 5 successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestionAll(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(urlall, {
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
      alert("Update the content of all question successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  if (type === "2") {
    if (number === "1") {
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of question 1
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestion1(e)}>
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
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
    } else if (number === "2"){
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of question 2
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestion2(e)}>
                <Form.Group onChange={onChangeIntro2}>
                  <Form.Label>Intro 2</Form.Label>
                  <Form.Control id="intro1" type="text" />
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
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
    } else if (number === "3") {
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of question 3
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestion3(e)}>
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
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
    } else if (number === "4") {
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of question 4
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestion4(e)}>
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
                <Button disabled={loading} type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
    } else if (number === "5") {
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of question 5
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestion5(e)}>
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
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
    } else if (number === "all"){
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

            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">Update Exercise</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
                <Form.Group onChange={onChangeType}>
                  <Form.Label>Select update type: </Form.Label>
                  <select id="type">
                    <option value="1">Question category name</option>
                    <option value="2">Contents of questions</option>
                  </select>
                </Form.Group>
                <Form.Group onChange={onChangeId}>
                  <Form.Label>ID</Form.Label>
                  <Form.Control id="id" type="text" />
                </Form.Group>
                <Form.Group onChange={onChangeNumber}>
                  <Form.Label>Select the question to update: </Form.Label>
                  <select id="number">
                    <option value="all"> all</option>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                    <option value="5"> 5</option>
                  </select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body className="update-ex-css">
              <h1 className="text-center mb-3">
                Update the content of all question
              </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={(e) => handleSubmitUpdateQuestionAll(e)}>
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
                  Update
                </Button>
              </Form>
            </Card.Body>
            <br></br>
            <br></br>
            <br></br>
          </Card>
        </>
      );
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

          <Card.Body className="update-ex-css">
            <h1 className="text-center mb-3">Update Exercise</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
              <Form.Group onChange={onChangeType}>
                <Form.Label>Select update type: </Form.Label>
                <select id="type">
                  <option value="1">Question category name</option>
                  <option value="2">Contents of questions</option>
                </select>
              </Form.Group>
              <Form.Group onChange={onChangeId}>
                <Form.Label>ID</Form.Label>
                <Form.Control id="id" type="text" />
              </Form.Group>
              <Form.Group onChange={onChangeNumber}>
                <Form.Label>Select the question to update: </Form.Label>
                <select id="number">
                  <option value="all"> all</option>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="4"> 4</option>
                  <option value="5"> 5</option>
                </select>
              </Form.Group>
              <Button disabled={loading} type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
          <br></br>
          <br></br>
          <br></br>
        </Card>
      </>
    );
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

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Excercise</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
            <Form.Group onChange={onChangeType}>
              <Form.Label>Select update type: </Form.Label>
              <select id="type">
                <option value="1">Question category name</option>
                <option value="2">Contents of questions</option>
              </select>
            </Form.Group>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        {/* <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Introduction Question</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateIntro(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeIntro}>
              <Form.Label>Intro</Form.Label>
              <Form.Control id="intro" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Question</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateQuestion(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion}>
              <Form.Label>Question</Form.Label>
              <Form.Control id="question" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Answer</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateAnswer(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer}>
              <Form.Label>Answer</Form.Label>
              <Form.Control id="answer" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Exercise</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeIntro}>
              <Form.Label>Intro</Form.Label>
              <Form.Control id="intro" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion}>
              <Form.Label>Question</Form.Label>
              <Form.Control id="question" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer}>
              <Form.Label>Answer</Form.Label>
              <Form.Control id="answer" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form> */}
        {/* </Card.Body> */}
        <br></br>
        <br></br>
        <br></br>
      </Card>
    </>
  );
}
