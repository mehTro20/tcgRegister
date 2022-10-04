import React, { useState } from "react";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { v4 as uuidv4 } from "uuid"

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
        <label>E-mail: <input type="email" onChange={emailHandler} value={email} /></label>
        <label>Surname: <input type="text" onChange={surnameHandler} value={surname} /></label>
        <label>Name: <input type="text" onChange={nameHandler} value={name} /></label>
        <label>ID Number: <input type="number" onChange={idnoHandler} value={idno} /></label>
        <label>Phone Number: <input type="number" onChange={phoneNumberHandler} value={phoneNumber} /></label>
        <button onClick={submitHandle} >Submit</button>
      </div>

      <div className="table">
        <table className="thead-dark" id="entries">
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
                  <td><button onClick={()=>deleteBtn(entries.id)}>Delete</button></td>
                </tr>
              );
            })}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
