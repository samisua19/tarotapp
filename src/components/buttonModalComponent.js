import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ModalBodyComponent from './modalBodyComponent';

const ButtonModalComponent = (props) => {
    
  const [modalShow, setModalShow] = useState(false);

  return (
      <>
            <Button variant="secondary" onClick={() => setModalShow(true)}>
                {props.titleButtonModal}
            </Button>

            <ModalBodyComponent
            titleModal={props.titleModal}
            show={modalShow}
            onHide={() => setModalShow(false)}
            > {props.children} </ModalBodyComponent>
      </>
  )
}

export default ButtonModalComponent