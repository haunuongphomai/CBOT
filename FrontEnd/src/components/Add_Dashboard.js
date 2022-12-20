import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBarAdmin from "../sidebar/NavBar_Admin";

export default function PostForm() {
  const url = "http://localhost:8080/admin/dashboard/add";
  const [name, setName] = useState("");
  const [theory, setTheory] = useState("");
  const [declare, setDeclare] = useState("");
  const [example, setExample] = useState("");

  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const onChangeTheory = (event) => {
    const value = event.target.value;
    setTheory(value);
  };
  const onChangeDeclare = (event) => {
    const value = event.target.value;
    setDeclare(value);
  };
  const onChangeExample = (event) => {
    const value = event.target.value;
    setExample(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      Axios.post(url, {
        name: name,
        theory: theory,
        declare: declare,
        example: example,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Add data successfully!");
    } catch {
      alert("Failed to add data!");
    }
    e.target.reset();
  }

  return (
    <>
      <NavBarAdmin />
      <Card>
        <div className="bd-admin">
          <a href="http://localhost:3000/add-dashboard">
            <button className="button">Add</button>
          </a>
          <a href="http://localhost:3000/update-dashboard">
            <button className="button button-mid">Update</button>
          </a>
          <a href="http://localhost:3000/delete-dashboard">
            <button className="button">Delete</button>
          </a>
        </div>
        <Card.Body className="add-db-css">
          <h1 className="text-center mb-3">Add Dashboard</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" placeholder="name..." type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeTheory}>
              <Form.Label>Theory</Form.Label>
              <Form.Control id="theory" placeholder="theory..." type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeDeclare}>
              <Form.Label>Declare</Form.Label>
              <Form.Control id="declare" placeholder="declare..." type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeExample}>
              <Form.Label>Example</Form.Label>
              <Form.Control id="example" placeholder="example..." type="text" />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}