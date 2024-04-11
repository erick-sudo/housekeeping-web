import React, { createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const contextData = {};
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
