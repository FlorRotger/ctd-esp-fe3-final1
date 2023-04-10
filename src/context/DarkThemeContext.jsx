import React, { createContext, useState } from "react";


export const DarkThemeContext = createContext({});

const DarkThemeContextProvider = ({ children }) => {
  const [isModoOscuro, setIsModoOscuro] = useState(false);

  const state = {
    isModoOscuro,
    setIsModoOscuro
  };

  return (
    <DarkThemeContext.Provider value={state}>
      {children}
    </DarkThemeContext.Provider>
  )

}
export default DarkThemeContextProvider