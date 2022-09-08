import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardComponent = (props) => {
  return (
    <Card style={{ width: "18rem", margin: '5px', padding: '0px', backgroundColor:'#342C3A' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + props.image} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title style={{color: 'black', textAlign:'center', margin:'0px'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'black', textAlign:'center', margin:'0px'}}>
            <p>{props.description}</p>
        </Card.Text>
        <div className="d-grid gap-2">
            <Button variant="danger">{props.titleButton}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default cardComponent;
