import React, { useState } from "react";
import {Box, Button, TextField} from "@mui/material";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [data, setValues] = useState({
    name: "",
    email: "",
    
  });

  const [validation, setValidation] = useState(false);

  const validateName = () => {
    let nameUser = data.name;
    if (nameUser.length <= 4) {
      return alert("Ingrese su nombre nuevamente");
    }
    return true;
  };

  const validateEmail = () => {
    let emailUser = data.email.split("@");
    if (emailUser.length < 2) {
      return alert("Ingrese formato email correcto @ ");
    }

    let punto = emailUser[1].split(".");
    if (punto.length < 2) {
      return alert("Ingrese formato email correcto .");
    }
    return true;
  };

    const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newData = {
      ...data,
      [name]: value,
    };
    setValues(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameValidation = validateName();
    let emailValidation = validateEmail();
   

    if (nameValidation && emailValidation ) {
      setValidation(true);
    }
  };

  return (
    <div>
      <Box component="form" 
      sx={{display: "flex", flexDirection: "column", gap: "20px", width:"20vw"}}
      onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          size="small"
          placeholder="Nombre y Apellido"
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          size="small"
          placeholder="email"
          onChange={handleChange}
        />
        <TextField
        type="text"
        name="consulta"
        size="big"
        placeholder="Ingrese su consulta"/>
        
        <button type="submit">Enviar</button>
      </Box>
      {validation ? (
        <h2>
          Gracias {data.name}, nos pondremos en contacto a la brevedad.
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
