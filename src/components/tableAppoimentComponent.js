import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { Container, Form, Table } from "react-bootstrap";
import { db } from "../database/firebase";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
    grow: 1,
  },
  {
    name: "Fecha cita",
    selector: (row) => row.appoimentDate,
    sortable: true,
    grow: 1,
  },
  {
    name: "Hora cita",
    selector: (row) => row.appoimentHour,
    sortable: true,
    grow: 1,
  },
  {
    name: "Correo",
    selector: (row) => row.email,
    sortable: true,
    grow: 1,
  },
  {
    name: "Teléfono",
    selector: (row) => row.phone,
    sortable: true,
    grow: 1,
  },
  {
    name: "Estado",
    selector: (row) => row.status,
    sortable: true,
    grow: 1,
  },
];

const TableAppoimentComponent = () => {
  const [appoiment, setAppoiment] = useState([]);
  const activeOrInactiveAppoiment = async (event, appoiment) => {
    const { value } = event.target;
    const lastModified = new Date().valueOf();
    await updateAppoimentInBD(appoiment.id, {
      ...appoiment,
      lastModified,
      status: value,
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
      arrAppoiment.push({ id: appoiment.id, ...appoiment.data(), status: selectButton(appoiment.data()) });
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
      case "Pendiente":
        return "yellow";
      case "Cumplida":
        return "green";
      case "Incumplida":
        return "red";
      default:
        break;
    }
  };

  const paginacionOpciones = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const selectButton = (_) => {
    console.log(_);
    return (
      <Form.Select
        style={{
          backgroundColor: selectColorStatus(_.status),
          fontWeight: "bold",
        }}
        size="md"
        value={_.status}
        onChange={(event) => activeOrInactiveAppoiment(event, _)}
      >
        <option
          value={"Pendiente"}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          Pendiente
        </option>
        <option
          value={"Cumplida"}
          style={{ backgroundColor: "green", fontWeight: "bold" }}
        >
          Cumplida
        </option>
        <option
          value={"Incumplida"}
          style={{ backgroundColor: "red", fontWeight: "bold" }}
        >
          Incumplida
        </option>
      </Form.Select>
    );
  };

  const ExpandedComponent = ({ data }) => <pre style={{textAlign: 'rigth', margin:'15px'}}>Descripción: {data.description}</pre>;

  return (
    <div className="App-header" style={{ justifyContent: "flex-start" }}>
      <h1>Agendas</h1>
      <div>
        <DataTable
          paginationPerPage={10}
          theme="dark"
          columns={columns}
          data={appoiment}
          pagination={true}
          responsive={true}
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          expandableRows 
          expandableRowsComponent={ExpandedComponent}
        />
      </div>
    </div>
  );
};

export default TableAppoimentComponent;
