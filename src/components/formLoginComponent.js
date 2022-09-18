import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from 'react-router-dom'
import { toast } from "react-toastify";
import { db } from "../database/firebase";

const FormLoginComponent = () => {
  const location = useLocation();
  const [pass, setPass] = useState("")
  const validateLoginFrom = (event) => {
    event.preventDefault()
    const md5 = require('md5')
    const passE = md5(pass)
    try {
      const q = query(
        collection(db, "pass"),
        where("passE", "==", passE)
      );
      getDocs(q).then(async (rsp) => {
        if (rsp && rsp.empty) {
          toast.error("Contraseña incorrecta")
        } else {
          const url = window.location.href.replace("/tarotapp", '/tableAppoiment')
          window.location.replace(url)
        }
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handlePassword = (event) => {
    const {value} = event.target
    if(value && value != "") setPass(value)
  }

  return (
    <Form onSubmit={validateLoginFrom}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" required={true} onChange={(event) => handlePassword(event)}/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit">
          Ingresar
        </Button>
      </div>
    </Form>
  );
};

export default FormLoginComponent;
