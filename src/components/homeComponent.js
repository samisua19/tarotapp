import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import CardComponent from "./cardComponent";
import CarouselComponent from "./carouselComponent";
const HomeComponent = () => {
  return (
    <>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <div className="homeImage">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <div style={{margin: '5px'}}>
              <h5 style={{ color: "yellow", fontSize: "50px" }}>
                Maestro Espiritual Angel
              </h5>
              <h5 style={{ color: "white", fontSize: "50px" }}>
                El Sanador Espiritual
              </h5>
              <h5 style={{ color: "white", fontSize: "30px" }}>
                Para dar un grandioso cambio a tu vida y traerte <strong>SALUD, DINERO, AMOR Y PROSPERIDAD</strong>
              </h5>
            </div>
            <div style={{display:'flex'}}>
              <div className="listCenter">
                <ul>
                  <li style={{ textAlign: "left" }}>
                    Si quieres ver a tu <strong>SER AMADO</strong> arrodillado <br></br> a
                    tus pies
                  </li>
                  <li>
                    Amarres <strong>FUERTES Y SEGUROS</strong>
                  </li>
                </ul>
              </div>
              <div className="listCenter">
                <ul>
                  <li>Lectura de TAROT y palma de mano</li>
                  <li>
                    Resultados inmediatos <strong>100% GARANTIZADOS</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CardComponent
            image="/tarotCartas.jpg"
            description="Breve descripción de lo que se realiza."
            titleButton="Agenda tu cita"
            title="Lectura de cartas"
          ></CardComponent>
          <CardComponent
            image="/amarres.jpg"
            description="Breve descripción de lo que se realiza."
            titleButton="Agenda tu cita"
            title="Amarres"
          ></CardComponent>
          <CardComponent
            image="/horoscopo.png"
            description="Breve descripción de lo que se realiza."
            titleButton="Agenda tu cita"
            title="Otros"
          ></CardComponent>
        </Row>
      </div>
    </>
  );
};

export default HomeComponent;
