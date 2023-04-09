import React, { createContext, useState, useReducer } from "react";

//contexto recopilamos valores para acceder a otra vista

//declaracion del contexto
export const NewContext = createContext({});

//creamos un provider
const NewContextProvider = ({ children }) => {
const [isLogged, setIsLogged] = useState(false);

//cuando se loggean cambia a true (manejador)

const handleLogin = () => setIsLogged(true);

const propiedades = {
    isLogged,
    handleLogin
}

  return (
  <NewContext.Provider value={propiedades}>
    {children}
    </NewContext.Provider>
  )
};

export default NewContextProvider;
