import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import ButtonModalComponent from "./buttonModalComponent";
import FormLoginComponent from './formLoginComponent';

const NavbarComponent = (props) => {
  return (
    <Navbar className="navBar">
      <Container style={{ display: "flex" }}>
        <div style={{display: 'flex'}}>
          <Image src={process.env.PUBLIC_URL + '/logotarot.png'} height={100}/>
          <div style={{display:'flex', flexDirection: 'column', justifyContent:'center'}}>
            <h1 style={{ margin: "0px", color:"white", fontFamily: ["Comic Sans MS"] }}>Agenda Espiritual</h1>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor:'#2c385b', width: '290px', height: '100px', borderRadius: '10px', padding: '7px'}}>
          <div>
            <h3 style={{color: 'white'}}>Número de Contacto: </h3>
          </div>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
            <div style={{display:'flex', flexDirection: 'column', justifyContent:'center'}}>
              <Image src={process.env.PUBLIC_URL + '/logowha.png'} height="30" style={{borderRadius: '20px'}}/>
            </div>
            <a href="#"><h3>0124 181241 23423</h3> </a>
          </div>
        </div>
        {/* <ButtonModalComponent titleButtonModal={props.titleButton} titleModal="Ingresar"><FormLoginComponent></FormLoginComponent></ButtonModalComponent> */}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent