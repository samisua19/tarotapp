import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalBodyComponent = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor:'#232f49', color: 'white', margin: '0px'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.titlemodal ? props.titlemodal : 'Ingresar'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'#232f49', color: 'white'}}>
          {props.children}
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:'#232f49', color: 'white'}}>
        <Button variant="danger" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBodyComponent;
