import React from "react";
import { Navbar, Container, Image, Col, Row } from "react-bootstrap";
import ButtonModalComponent from "./buttonModalComponent";
import FormLoginComponent from "./formLoginComponent";

const NavbarComponent = (props) => {
  return (
    <Navbar className="navBar">
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="navBarContent"
        >
          <Col style={{ display: "flex" }} xl={8}>
            <Image
              src={process.env.PUBLIC_URL + "/logotarot.png"}
              className="logoNavbar"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  margin: "0px",
                  color: "white",
                  fontFamily: ["Comic Sans MS"],
                }}
              >
                Agenda Espiritual
              </h1>
            </div>
          </Col>
          <Col
            xl={4}
            className="containerPhone"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#b38fc6",
              height: "100px",
              borderRadius: "10px",
              padding: "7px",
            }}
          >
            <Row style={{ display: "flex", flexDirection: "column" }} xl={12}>
              <Col xl={12}>
                <h3 style={{ color: "white", fontFamily: ["Comic Sans MS"] }}>
                  Número de Contacto:
                </h3>
              </Col>
              <Col style={{ display: "flex" }} xl={12}>
                <Row>
                  <Col xl={2} md={2} sm={2} xs={2}>
                    <Image
                      src={process.env.PUBLIC_URL + "/logowha.png"}
                      height="30"
                      style={{ borderRadius: "20px" }}
                    />
                  </Col>
                  <Col xl={10} md={10} sm={10} xs={10}>
                    <a href="#">
                      <h3 style={{ fontFamily: ["Comic Sans MS"] }}>
                        0124 181241 234
                      </h3>
                    </a>
                  </Col>
                </Row>
                <div></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
