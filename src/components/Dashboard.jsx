import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Services from "./Services";

function Dashboard() {
  const { userInfo, logout } = useContext(AppContext);

  return (
    <>
      {userInfo ? (
        <div>
          <h1>{userInfo ? `Hello ${userInfo.name}` : "Hello Guest"}</h1>
          <div>
            <Routes>
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Navigate path="/login" />
      )}
    </>
  );
}

export default Dashboard;
