import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { Form } from "react-bootstrap";
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

  useEffect(() => {
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

    const selectButton = (_) => {
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

    const addParseObjet = async (querySnapshot) => {
      const arrAppoiment = [];
      querySnapshot.forEach((appoiment) => {
        arrAppoiment.push({
          id: appoiment.id,
          ...appoiment.data(),
          status: selectButton({...appoiment.data(), id: appoiment.id}),
        });
      });
      return arrAppoiment;
    };

    const getAppoiment = async () => {
      onSnapshot(collection(db, "appoiment"), async (querySnapshot) => {
        const arrAppoiment = await addParseObjet(querySnapshot);
        setAppoiment(arrAppoiment);
      });
    };
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

  const ExpandedComponent = ({ data }) => (
    <pre style={{ textAlign: "rigth", margin: "15px" }}>
      <div>
        <div style={{ whiteSpace: 'normal' }}>Motivo consulta: {data.description}</div>
      </div>
    </pre>
  );

  return (
    <div className="App-header" style={{ justifyContent: "flex-start" }}>
      <h1>Agendas</h1>
      <div style={{width: '1000px', fontSize: '20px', borderRadius: '10px'}}>
        <DataTable
          paginationPerPage={10}
          theme="dark"
          columns={columns}
          data={appoiment.sort(($a, $b) => $a.lastModified - $b.lastModified)}
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
