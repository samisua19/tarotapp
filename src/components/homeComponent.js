import React from "react";
import { Image, Row } from "react-bootstrap";
import CardComponent from "./cardComponent";
import CarouselComponent from "./carouselComponent";
const HomeComponent = () => {
  return (
    <>
      <div className="App-header" style={{ justifyContent: "flex-start" }}>
        <div className="homeImage">
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
            <h1 style={{ color: "white", fontSize: '50px' }}>Mejora tu relación</h1>
            <h3 style={{ color: "white", fontSize: '35px' }}>Consulta tu futuro</h3>
            <h5 style={{ color: "yellow", fontSize: '30px' }}>Maestro Espiritual Angel</h5>
          </div>
          <CarouselComponent style={{ margin: "0px" }} />
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
            titleButton="Ingresar"
            title="Lectura de cartas"
          ></CardComponent>
          <CardComponent
            image="/amarres.jpg"
            description="Breve descripción de lo que se realiza."
            titleButton="Ingresar"
            title="Amarres"
          ></CardComponent>
          <CardComponent
            image="/horoscopo.png"
            description="Breve descripción de lo que se realiza."
            titleButton="Ingresar"
            title="Otros"
          ></CardComponent>
        </Row>
      </div>
    </>
  );
};

export default HomeComponent;
