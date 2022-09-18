import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ModalBodyComponent from './modalBodyComponent';

const ButtonModalComponent = (props) => {
    
  const [modalShow, setModalShow] = useState(false);

  const returnUrlHome = () => {
    const url = window.location.href.replace('/tableAppoiment',"/tarotapp")
    window.location.replace(url)
  }

  return (
      <>
            <Button variant="secondary" onClick={() =>  window.location.href.includes("/tarotapp") ? setModalShow(true) : returnUrlHome() }>
                {props.titleButtonModal}
            </Button>

            <ModalBodyComponent
            titlemodal={props.titlemodal}
            show={modalShow}
            onHide={() => setModalShow(false)}
            > {props.children} </ModalBodyComponent>
      </>
  )
}

export default ButtonModalComponent