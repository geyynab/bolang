
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wisatapage from "../src/components/map.js"
import LoginPage from "../src/components/loginpage.js";
import RegisterPage from "../src/components/register.js";

function Dashboard() {
  return <div className="p-10">Welcome to the Dashboard</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wisatapage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
