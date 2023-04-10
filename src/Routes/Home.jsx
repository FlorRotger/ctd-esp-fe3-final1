import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import '../stylesheet/Card.css'
export const endPoint = "https://jsonplaceholder.typicode.com/users";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentista, setDentista] = useState([]);

  const getDentist = async () => {
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data);
    setDentista(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentista.length
          ? dentista.map((item) => (
            
              <Card
                key={item.id}
                name={item.name}
                username={item.username}
                id={item.id}
              />
            ))
          : null}
      </div>
    </main>
  );
};

export default Home;