import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
const NavbarComponent = (props) => {
  return (
    <Navbar style={{ backgroundColor: "#282c34" }}>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ margin: "0px" }}>Tarot App</h1>
        <Button variant="danger" >{props.titleButton}</Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent