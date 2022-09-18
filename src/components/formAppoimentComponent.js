import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { db } from "../database/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const FormAppoimentComponent = () => {

  const createAt = new Date().getTime()

  const newAppoiment = {
    name: "",
    phone: "",
    email: "",
    appoimentDate: "",
    description: "",
    appoimentHour: "",
    status: 'Pendiente',
    createAt: createAt,
    lastModified: createAt
  };

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const date = yesterday.toISOString().slice(0, 10);
  const min =
    today.getMinutes().toString().length === 1
      ? "0" + today.getMinutes().toString()
      : today.getMinutes().toString();

  const hour = today.getHours().toString() + ":" + min;
  const [appoiment, setAppoiment] = useState(newAppoiment);
  const [disableButton, setDisbledButton] = useState(false);
  const [isValidateHour, setIsValidateHour] = useState(false);

  const changeForm = (event) => {
    const { name, value } = event.target;
    if(name === "appoimentDate") validateDate(value)
    setAppoiment({ ...appoiment, [name]: value });
  };

  const handleAppoiment = async (event) => {
    event.preventDefault();
    setDisbledButton(true);
    validateAppoiment();
  };

  const validateAppoiment = () => {
    try {
      const q = query(
        collection(db, "appoiment"),
        where("appoimentDate", "==", appoiment.appoimentDate),
        where("appoimentHour", "==", appoiment.appoimentHour)
      );
      getDocs(q).then(async (rsp) => {
        if (rsp && rsp.empty) {
          createAppoiment();
        } else {
          toast.error("La fecha y la hora de la agenda ya está ocupada.");
          setDisbledButton(false);
        }
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const validateDate = (appoimentDate) => {
    appoimentDate === date ? setIsValidateHour(true) : setIsValidateHour(false)
  }

  const createAppoiment = () => {
    try {
      addDoc(collection(db, "appoiment"), appoiment)
        .then((rsp) => {
          toast("Agenda creada", {
            type: "success",
            autoClose: 2000,
          });
          setDisbledButton(false);
        })
        .catch((err) => {
          setDisbledButton(false);
          toast.error("Ha ocurrido un error.", err);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <Form onSubmit={handleAppoiment} id="appoimentForm">
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={changeForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="number"
          placeholder="Teléfono"
          name="phone"
          onChange={changeForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Correo eléctronico"
          name="email"
          onChange={changeForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Fecha para cita</Form.Label>
        <Form.Control
          min={date}
          type="date"
          placeholder="Fecha para cita"
          name="appoimentDate"
          onChange={changeForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hora para la cita</Form.Label>
        <Form.Control
          type="time"
          min={isValidateHour ? hour : undefined}
          placeholder="Hora para la cita"
          name="appoimentHour"
          onChange={changeForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descripcón del problema</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Descripcón del problema"
          name="description"
          style={{ height: "120px" }}
          onChange={changeForm}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit" disabled={disableButton}>
          Agendar cita
        </Button>
      </div>
    </Form>
  );
};

export default FormAppoimentComponent;
