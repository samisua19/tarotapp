import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { Container, Form, Table } from "react-bootstrap";
import { db } from "../database/firebase";
import { toast } from "react-toastify";

const TableAppoimentComponent = () => {
  const [appoiment, setAppoiment] = useState([]);
  const activeOrInactiveAppoiment = async (event,appoiment) => {
    const {value} = event.target
    const lastModified = new Date().valueOf();
    await updateAppoimentInBD(appoiment.id, {
      ...appoiment,
      lastModified,
      status: value
    });
  };
  const updateAppoimentInBD = async (id, girl) => {
    await setDoc(doc(db, "appoiment", id), { ...girl });
    toast("Agenda actualizada", {
      type: "success",
      autoClose: 2000,
    });
  };

  const addParseObjet = async (querySnapshot) => {
    const arrAppoiment = [];
    querySnapshot.forEach((appoiment) => {
      arrAppoiment.push({ id: appoiment.id, ...appoiment.data() });
    });
    return arrAppoiment;
  };

  const getAppoiment = async () => {
    onSnapshot(collection(db, "appoiment"), async (querySnapshot) => {
      const arrAppoiment = await addParseObjet(querySnapshot);
      setAppoiment(arrAppoiment);
    });
  };
  useEffect(() => {
    getAppoiment();
  }, []);

  const selectColorStatus = (status) => {
    switch (status) {
      case 'Pendiente':
        return 'yellow'
      case 'Cumplida':
        return 'green'
      case 'Incumplida':
        return 'red'
      default:
        break;
    }
  }

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
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Descripción</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(appoiment).sort(($a,$b) => $a.lastModified - $b.lastModified).map((_, idx) => {
              return (
                <tr key={_.id}>
                  <td>{_.name}</td>
                  <td>{_.appoimentDate}</td>
                  <td>{_.appoimentHour}</td>
                  <td>{_.email}</td>
                  <td>{_.phone}</td>
                  <td>{_.description}</td>
                  <td>
                    <Form.Select style={{ backgroundColor: selectColorStatus(_.status), fontWeight: 'bold' }} size="md" value={_.status} onChange={(event) => activeOrInactiveAppoiment(event,_)}>
                      <option value={'Pendiente'} style={{backgroundColor: 'yellow', fontWeight: 'bold'}}>Pendiente</option>
                      <option value={'Cumplida'} style={{backgroundColor: 'green', fontWeight: 'bold'}}>Cumplida</option>
                      <option value={'Incumplida'} style={{backgroundColor: 'red', fontWeight: 'bold'}}>Incumplida</option>
                    </Form.Select>
                  </td>
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
