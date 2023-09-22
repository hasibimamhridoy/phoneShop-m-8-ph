import React, { createContext } from "react";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  
    const userName = "Hasib Imam";


  return (
    <div>
      <GlobalContext.Provider value={userName}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
