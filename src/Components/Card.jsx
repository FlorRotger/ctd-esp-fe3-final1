import React, {useContext} from "react";
import "../stylesheet/Card.css";
import { FavContext } from "../context/FavContext";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(FavContext);

   const addFav = () => {
    dispatch({ type: 'ADD', payload: { name, username, id } })
  };

  const remove = () => {
    dispatch({ type: 'REMOVE', payload: { name, username, id } })
  };
  

  return (
    <>
    <Link to={`/dentist/${id}`}>
      <div className="card">        
        <img src="./images/doctor.jpg" />
        <h5> {name}</h5>
        <p>{username}</p>
        <>
        {state.data.some((element) => element.id === id) ? (
          <Link onClick={remove} className="favButton">
            <FavoriteIcon className="imgperfil" alt="boton like" />
          </Link>
        ) : (
          <Link onClick={addFav} className="favButton">
             <FavoriteBorderIcon className="imgperfil" alt="boton deslike" />
          </Link>
        )}
        
        </>


      </div>
    </Link>
    </>
  );
        };
        


export default Card;
