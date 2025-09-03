import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {user?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )}
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;