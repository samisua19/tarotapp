import React from "react";
import Carousel from "react-bootstrap/Carousel";
import tarotImage from "./../tarotapp.png";

const carouselComponent = () => {
  return (
    <Carousel style={{ width: "800px", height: "130px" }}>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h3>Alan Walker</h3>
        <p>Excelente Servico.</p>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h3>Emilio Delgado</h3>
        <p>Está muy recomendado el servicio. Excelente!!</p>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h3>Mariano Delgado</h3>
        <p>Me resolvió el problema. Muchas gracias.</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default carouselComponent;
