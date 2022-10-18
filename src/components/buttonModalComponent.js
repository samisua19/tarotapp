import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FormAppoimentComponent from "./formAppoimentComponent";
import FormLoginComponent from "./formLoginComponent";
import ModalBodyComponent from "./modalBodyComponent";

const ButtonModalComponent = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" ? (
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          {props.titleButtonModal}
        </Button>
      ) : (
        <Link to={"/tarotapp"}>
          <Button variant="secondary" onClick={() => setPage("home")}>
            Inicio
          </Button>
        </Link>
      )}

      <ModalBodyComponent
        titlemodal={props.titlemodal}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        {props.titlemodal === "Agendar cita" ? (
          <FormAppoimentComponent></FormAppoimentComponent>
        ) : (
          <FormLoginComponent
            onHide={() => setModalShow(false)}
            setPage={() => setPage("tableAppoiment")}
          ></FormLoginComponent>
        )}
      </ModalBodyComponent>
    </>
  );
};

export default ButtonModalComponent;
