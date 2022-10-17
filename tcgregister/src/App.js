import React, { useState } from "react";
import "./App.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Table from "react-bootstrap/Table"



function App() {
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [idno, setIdno] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [entries, setEntries] = useState([]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const idnoHandler = (e) => {
    setIdno(e.target.value);
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    // const validateEmail = (email) => {
    //   let re = /\S+@\S+\.\S+/;
    //   return re.test(email);
    // };
    // if (validateEmail(email) === false) {
    //   return alert("Please enter a valid email address");
    // } else if (idno.length !== 13) {
    //   return alert("Please enter a valid ID");
    // } else if (phoneNumber.length !== 10) {
    //   return alert("Please enter a valid phone number");
    // } else {
    setEntries([
      ...entries,
      {
        id: Math.random() * 1000,
        email: email,
        surname: surname,
        name: name,
        IDnumber: idno,
        phoneNo: phoneNumber,
      },
    ]);
    // }
    setEmail("");
    setSurname("");
    setName("");
    setIdno(0);
    setPhoneNumber(0);
    // }
  };

  const deleteBtn = (id) => {
    let newList = entries.filter((item) => item.id !== id);
    setEntries([...newList]);
  };

  return (
    <div className="App">
      <div className="form">
      <Form>
          <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="email?"
            onChange={emailHandler}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="surname?" onChange={surnameHandler} value={surname} />
            </Form.Group>
        </Row>
          
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name?" onChange={nameHandler} value={name} />
            </Form.Group>

        <Form.Group className="mb-3" controlId="formGridID Number">
          <Form.Label>ID Number</Form.Label>
          <Form.Control type="number" onChange={idnoHandler} value={idno} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPhone Number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            onChange={phoneNumberHandler}
            value={phoneNumber}
          />
        </Form.Group>

        <Button variant="primary" onClick={submitHandle}>
          Submit
        </Button>
      </Form>
      </div>

      <div className="table">
        <Table
          className="thead-dark"
          striped
          bordered
          hover
          size="sm"
          variant="dark"
        >
          <thead>
            <tr>
              <th scope="col">E-mail</th>
              <th scope="col">Surname</th>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
            {entries.map((entries, key) => {
              return (
                <tr key={key}>
                  <td>{entries.email}</td>
                  <td>{entries.surname}</td>
                  <td>{entries.name}</td>
                  <td>{entries.IDnumber}</td>
                  <td>{entries.phoneNo}</td>
                  <td>
                    <Button
                      onClick={() => deleteBtn(entries.id)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
            {/* </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
