import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
  if (!username || !password) {
    alert("Username dan password wajib diisi!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      alert(data.message || "Login gagal");
      return;
    }

    // Simpan info ke localStorage
    localStorage.setItem("username", data.username);
    localStorage.setItem("role", data.role); // 'admin' atau 'user'

    alert("Login berhasil!");

    // Redirect berdasarkan role
    if (data.role === "admin") {
      navigate("/admin");
    } else if (data.role === "user") {
      navigate("/"); // Halaman map
    } else {
      alert("Role tidak dikenal.");
    }

  } catch (error) {
    alert("Terjadi kesalahan saat login.");
  }
};

  return (
    <div className="login-container">
      <div className="bolang-logo" />
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button-container">
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}