// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Wisatapage from "./components/map";
import LoginPage from "./components/loginpage";
import RegisterPage from "./components/register";
import ProfilePage from "./components/profile";
import Header from "./components/header";
import AdminPage from "./components/admin";

function Dashboard() {
  return <div className="p-10">Welcome to the Dashboard</div>;
}

// Komponen Layout yang hanya tampilkan header jika bukan di login/register
function AppLayout() {
  const location = useLocation();
  const hideHeader = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Wisatapage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}