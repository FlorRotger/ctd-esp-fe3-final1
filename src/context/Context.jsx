import React, { createContext, useState } from "react";

//contexto recopilamos valores para acceder a otra vista

//declaracion del contexto
export const NewContext = createContext({});

const NewContextProvider = ({ children }) => {
 
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("auth") ? true : false
  );

  //cuando se loggean cambia a true (manejador)
  const handleLogin = () => {
    setIsLogged(true);
  localStorage.setItem("auth", true);
  };

  const propiedades = {
    isLogged,
    handleLogin,
  };

    return (
    <NewContext.Provider value={ propiedades}>
      {children}
    </NewContext.Provider>
  );
};

//creamos un provider

export default NewContextProvider;
