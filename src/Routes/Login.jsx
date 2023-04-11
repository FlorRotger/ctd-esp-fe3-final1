import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewContext } from "../context/Context";
import { Box, Button, TextField } from "@mui/material";
import { AuthContainer, Glass } from '../stylesheet/styles.js'


const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" }); //capturamos valor

  const { handleLogin } = useContext(NewContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    handleLogin();
    navigate("/home");
  };

  return (
    <AuthContainer>
      <Glass>
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        width: "20vw",
      }}
      onSubmit={handleSubmit}
    >
      
      <TextField
        name="email"
        size="small"
        type="text"
        label="E-mail"
        placeholder="Ingrese su e-mail"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />

      <TextField
        name="password"
        size="small"
        type="text"
        label="contraseña"
        placeholder="Ingrese su contraseña"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />

      <Button type="submit" size="small" variant="contained">
        Ingresar
      </Button>
    </Box>
      </Glass>
    </AuthContainer>
  );
};

export default Login;
