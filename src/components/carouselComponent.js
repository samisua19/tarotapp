import React from "react";
import Carousel from "react-bootstrap/Carousel";

const carouselComponent = () => {
  return (
    <Carousel style={{ width: "800px", height: "110px" }}>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h4>Alan Walker</h4>
        <p style={{fontSize:'20px'}}>Excelente Servico.</p>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h3>Emilio Delgado</h3>
        <p style={{fontSize:'20px'}}>Está muy recomendado el servicio. Excelente!!</p>
      </Carousel.Item>
      <Carousel.Item style={{ textAlign: "center" }}>
        <h3>Mariano Delgado</h3>
        <p style={{fontSize:'20px'}}>Me resolvió el problema. Muchas gracias.</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default carouselComponent;
