import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Services from "./Services";

function Dashboard() {
  const { userInfo, logout } = useContext(AppContext);

  return (
    <>
      {Boolean(true) ? (
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Services />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Dashboard;
