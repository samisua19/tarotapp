import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import ButtonModalComponent from "./buttonModalComponent";
import CardComponent from "./cardComponent";
import CarouselComponent from "./carouselComponent";
import FormLoginComponent from "./formLoginComponent";
const HomeComponent = () => {
  return (
    <>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <Container>
          <Row>
            <Col>
              <Row className="homeImage">
                <div>
                  <h5 className="nameMaster" style={{}}>
                    Maestro Espiritual Angel
                  </h5>
                  <h5
                    className="titleImageInitial"
                    style={{
                      color: "white",
                    }}
                  >
                    El Sanador Espiritual
                  </h5>
                  <h5 className="messageInitial" style={{}}>
                    Para dar un grandioso cambio a tu vida y traerte
                    <strong>SALUD, DINERO, AMOR Y PROSPERIDAD</strong>
                  </h5>
                </div>
              </Row>
              <Row>
                <div
                  className="initialText"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontFamily: ["Comic Sans MS"],
                    textAlign: "center",
                  }}
                >
                  <p>
                    Obtén respuestas en este periodo de incertidumbre.{" "}
                    <strong>¿Estás preocupado por tu futuro?</strong> 1 millon
                    de personas han experimentado una consulta con un tarotista
                    para ser guiados. ¡Escoge nuestros servicios y aprovecha tu
                    primera consulta con un vidente excepcional!
                  </p>
                </div>
              </Row>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Col>
                  <CardComponent
                    image="/tarotCartas.jpg"
                    description="¿Tienes dudas de lo que te depara para el futuro? Dejame ayudarte."
                    titleButton="Agenda tu cita"
                    title="Lectura de cartas"
                  ></CardComponent>
                </Col>
                <Col>
                  <CardComponent
                    image="/amarres.jpg"
                    description="¿Quieres a tu ser amado arrodillado a tus pies? Mi trabajo es 100% GARANTIZADO."
                    titleButton="Agenda tu cita"
                    title="Amarres"
                  ></CardComponent>
                </Col>
                <Col>
                  <CardComponent
                    image="/horoscopo.png"
                    description="Disponemos de una gran variedad de servicios, agenda tu cita YA."
                    titleButton="Agenda tu cita"
                    title="Otros"
                  ></CardComponent>
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                width: "350px",
                backgroundColor: "#eeeeee",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <ButtonModalComponent
                titleButtonModal="Ingresar"
                titleModal="Ingresar"
              >
                <FormLoginComponent></FormLoginComponent>
              </ButtonModalComponent>
              <Image
                src={process.env.PUBLIC_URL + "/tarot-lovers.jpg"}
                style={{ borderRadius: "10px", marginTop: "20px" }}
              />
              <div
                style={{
                  backgroundColor: "#b38fc6",
                  height: "300px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{ fontFamily: ["Comic Sans MS"], textAlign: "center" }}
                >
                  El maestro Ángel te ayudará en tu SALUD y en tu VIDA, en el
                  AMOR, en tu MATRIMONIO o en tu NEGOCIO.
                </h3>
                <h3
                  style={{ fontFamily: ["Comic Sans MS"], textAlign: "center" }}
                >
                  <strong>¡Que esperas para contactarme!</strong>
                </h3>
              </div>
              <div style={{ margin: "5px" }}>
                <h3 style={{ color: "#462756", fontFamily: ["Comic Sans MS"] }}>
                  Listado de mis servicios
                </h3>
                <ul style={{ color: "#462756", fontFamily: ["Comic Sans MS"] }}>
                  <li>Amarres</li>
                  <li>Magia</li>
                  <li>Limpieza</li>
                  <li>Lectura de cartas del tarot</li>
                  <li>Destruyo maleficios</li>
                  <li>Retiro enemigos</li>
                  <li>¿Tu pareja te fue infiel?</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeComponent;
