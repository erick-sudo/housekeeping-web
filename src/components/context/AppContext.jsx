import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  const contextData = {
    loading,
    userInfo,
    setUserInfo,
    startLoading,
    stopLoading,
  };
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
