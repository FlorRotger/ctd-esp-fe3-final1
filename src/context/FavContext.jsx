import React, { createContext, useReducer} from 'react'

export const FavContext = createContext({});

const addFav = (state, action) => {
    switch (action.type) {
      case "ADD":
        localStorage.setItem(
          "fav",
          JSON.stringify([...state.data, action.payload])
        );
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case "REMOVE":
        const result = state.data.filter(
          (elemento) => elemento.id !== action.payload.id
        );
        localStorage.setItem("fav", JSON.stringify(result));
        return {
          ...state,
          data: result,
        };
  
      default:
        return {
          ...state,
        };
    }
  };
const FavContextProvider = ({children}) => {
    const initialState = { data: [] };
    const [state, dispatch] = useReducer(addFav, initialState);

const State = {
    state,
    dispatch,
  };


return (
    <FavContext.Provider value={ State }>
      {children}
    </FavContext.Provider>
  );

}

export default FavContextProvider;