import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import CardComponent from "./cardComponent";
import CarouselComponent from "./carouselComponent";
const HomeComponent = () => {
  return (
    <>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <Container>
          <Row>
            <Col>
              <div className="homeImage">
                <div>
                  <h5
                    style={{
                      color: "yellow",
                      fontSize: "60px",
                      fontFamily: ["Comic Sans MS"],
                    }}
                  >
                    Maestro Espiritual Angel
                  </h5>
                  <h5
                    style={{
                      color: "white",
                      fontSize: "50px",
                      fontFamily: ["Comic Sans MS"],
                    }}
                  >
                    El Sanador Espiritual
                  </h5>
                  <h5
                    style={{
                      color: "white",
                      fontSize: "30px",
                      fontFamily: ["Comic Sans MS"],
                    }}
                  >
                    Para dar un grandioso cambio a tu vida y traerte
                    <strong>SALUD, DINERO, AMOR Y PROSPERIDAD</strong>
                  </h5>
                </div>
              </div>
              <Container>
                <div style={{ color: "black", fontSize: "15px", fontFamily: ["Comic Sans MS"], }}>
                  <p>
                    Obtén respuestas en este periodo de incertidumbre. <strong>¿Estás
                    preocupado por tu futuro?</strong> 1 millon de personas han
                    experimentado una consulta con un tarotista para ser
                    guiados. ¡Escoge nuestros servicios y aprovecha tu primera consulta con un
                    vidente excepcional!
                  </p>
                </div>
              </Container>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardComponent
                  image="/tarotCartas.jpg"
                  description="¿Tienes dudas de lo que te depara para el futuro? Dejame ayudarte."
                  titleButton="Agenda tu cita"
                  title="Lectura de cartas"
                ></CardComponent>
                <CardComponent
                  image="/amarres.jpg"
                  description="¿Quieres a tu ser amado arrodillado a tus pies? Mi trabajo es 100% GARANTIZADO."
                  titleButton="Agenda tu cita"
                  title="Amarres"
                ></CardComponent>
                <CardComponent
                  image="/horoscopo.png"
                  description="Disponemos de una gran variedad de servicios, agenda tu cita YA."
                  titleButton="Agenda tu cita"
                  title="Otros"
                ></CardComponent>
              </div>
            </Col>
            <Col
              style={{
                width: "350px",
                backgroundColor: "#eeeeee",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            ></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeComponent;
