import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Container, Button, Table } from "react-bootstrap";
import { db } from "../database/firebase";

const TableAppoimentComponent = () => {
  const [appoiment, setAppoiment] = useState([]);
  useEffect(() => {
    const addParseObjet = async (querySnapshot) => {
      const arrAppoiment = [];
      querySnapshot.forEach((appoiment) => {
        arrAppoiment.push(appoiment.data());
      });
      return arrAppoiment;
    };
    const getAppoiment = async () => {
      onSnapshot(collection(db, "appoiment"), async (querySnapshot) => {
        const arrAppoiment = await addParseObjet(querySnapshot);
        setTimeout(() => {
          console.log(arrAppoiment);
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
        <Table striped responsive bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha cita</th>
              <th>Hora cita</th>
              <th>Correo</th>{/* 
              <th>Estado</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.values(appoiment).map((_, idx) => {
              return (
                <tr key={_.id}>
                  <td>{_.name}</td>
                  <td>{_.appoimentDate}</td>
                  <td>{_.appoimentHour}</td>
                  <td>{_.email}</td>
                  {/* <td>
                    <Button onClick={async () => await activeOrInactiveGirl(_)}>
                      {_.active ? "Activa" : "Inactiva"}
                    </Button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableAppoimentComponent;
