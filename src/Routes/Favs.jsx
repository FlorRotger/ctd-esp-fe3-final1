import React, { useContext } from "react";
import Card from "../Components/Card";
import { FavContext } from "../context/FavContext";
import "../stylesheet/CardFavs.css"



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContext(FavContext)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="cardFavs-grid">
      <section >
      {state.data?.map((data) => (
          <div className="cardFavs">
            <img src="./images/doctor.jpg"
               />
            <h5> {data.name}</h5>
            <p>{data.username}</p>
          </div>
        ))}
      </section>
      </div>

      </>
    
  );
};

export default Favs;
