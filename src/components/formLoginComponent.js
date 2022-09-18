import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from 'react-router-dom'

const FormLoginComponent = () => {
  const location = useLocation();
  const validateLoginFrom = (event) => {
    event.preventDefault()
    const url = window.location.href.replace("/tarotapp", '/tableAppoiment')
    window.location.replace(url)
  }

  return (
    <Form onSubmit={validateLoginFrom}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
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
