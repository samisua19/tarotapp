import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormLoginComponent = () => {
  return (
    <Form>
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
