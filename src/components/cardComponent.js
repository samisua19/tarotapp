import React from "react";
import Card from 'react-bootstrap/Card';
import ButtonModalComponent from "./buttonModalComponent";
import FormAppoimentComponent from "./formAppoimentComponent";

const CardComponent = (props) => {
  return (
    <Card style={{ width: "18rem", margin: '5px', padding: '0px', backgroundColor:'#232f49' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + props.image} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title style={{color: 'black', textAlign:'center', margin:'0px', fontSize:'25px'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'black', textAlign:'center', margin:'0px', fontSize:'20px'}}>
            {props.description}
        </Card.Text>
        <div className="d-grid gap-2">
          <ButtonModalComponent titleButtonModal={props.titleButton} titlemodal="Agendar cita"><FormAppoimentComponent/></ButtonModalComponent>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
