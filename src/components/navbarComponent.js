import React from "react";
import { Navbar, Container } from "react-bootstrap";
import ButtonModalComponent from "./buttonModalComponent";
import FormLoginComponent from './formLoginComponent';

const NavbarComponent = (props) => {
  return (
    <Navbar style={{ backgroundColor: "#282c34" }}>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ margin: "0px", color:"#C1FE00" }}>Agenda Espiritual</h1>
        <ButtonModalComponent titleButtonModal={props.titleButton} titleModal="Ingresar"><FormLoginComponent></FormLoginComponent></ButtonModalComponent>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent