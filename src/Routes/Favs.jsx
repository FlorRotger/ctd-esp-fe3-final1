import React, { useContext } from "react";
import Card from "../Components/Card";
import { useActionData } from "react-router-dom";
import { FavContext } from "../context/FavContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContext(FavContext)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.data?.map((data) => (

        <p>{data.name}</p>
        
        ))
        }

      </div>

      </>
    
  );
};

export default Favs;
