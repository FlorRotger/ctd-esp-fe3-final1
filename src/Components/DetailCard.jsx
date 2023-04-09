import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../stylesheet/DetailsCard.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const DetailCard = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
    const [dentista, setDentista] = useState(undefined);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDentista(data);
      });
  }, [id]);

  return (
    <>
      {dentista ? (
        <section className="dentista-Details">
          <h1><strong>Detail Dentist</strong></h1>
          <div>
            <ul>
              <li><strong>Nombre completo:</strong> {dentista.name}</li>
              <li><strong>Telefono:</strong> {dentista.phone} </li>
              <li><strong>Website:</strong> {dentista.website}</li>
              <li><strong>Email:</strong> {dentista.email} </li>
            </ul>
            
            <Link className="volver" to="/home"> Volver</Link>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DetailCard;
