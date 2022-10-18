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
      <Modal.Header closeButton style={{backgroundColor:'#eeeeee', color: '#8a57a5', margin: '0px'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.titlemodal ? props.titlemodal : 'Ingresar'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'#eeeeee', color: '#8a57a5'}}>
          {props.children}
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:'#eeeeee', color: '#8a57a5'}}>
        <Button variant="danger" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBodyComponent;
