import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormAppoimentComponent = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="number" placeholder="Teléfono" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Correo eléctronico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcón del problema</Form.Label>
        <Form.Control as="textarea" placeholder="Descripcón del problema" style={{ height: '150px' }}/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit">
          Agendar cita
        </Button>
      </div>
    </Form>
  );
};

export default FormAppoimentComponent;
