import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Row, Col, Card, Container, Button, Image } from 'react-bootstrap'
import { db } from "../database/firebase";

const TableAppoimentComponent = () => {
  const [appoiment, setAppoiment] = useState([]);
  useEffect(() => {
      const addParseObjet = async (querySnapshot) => {
          const arrAppoiment = []
          querySnapshot.forEach(appoiment => {
              arrAppoiment.push(appoiment.data())
          });
          return arrAppoiment
      }
    const getAppoiment = async () => {
      onSnapshot(collection(db, "appoiment"), async (querySnapshot) => {
        const arrAppoiment = await addParseObjet(querySnapshot);
        setTimeout(() => {
            console.log(arrAppoiment)
          setAppoiment(arrAppoiment);
        }, 1000);
      });
    };
    getAppoiment();
  }, []);

  return (
    <div className="App-header" style={{ justifyContent: "flex-start" }}>
      <h1>Agendas</h1>
      <Container>
        <Row xs={1} md={4} className="g-2">
          {Object.values(appoiment)
            .sort(($a, $b) => $b.lastModified - $a.lastModified)
            .map((_, idx) => {
              return (
                <Col key={_.id}>
                    <h1>{_.name}</h1>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default TableAppoimentComponent;
