import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css"; // pastikan file CSS ini ada

export default function RegisterPage() {
  const navigate = useNavigate();

  // State input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State untuk tahu apakah input sudah disentuh
  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  // Validasi username
  const isValidUsername = (username) => /^[a-zA-Z0-9]{4,16}$/.test(username);

  // Validasi password
  const getPasswordRules = (password) => {
    return {
      length: password.length >= 8 && password.length <= 20,
      hasCapital: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
    };
  };

  const passwordRules = getPasswordRules(password);
  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    if (!isValidUsername(username)) {
      alert("Username harus 4–16 karakter dan hanya huruf/angka.");
      return;
    }

    if (!isPasswordValid) {
      alert("Password belum memenuhi semua syarat.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Registrasi gagal");
        return;
      }

      alert(data.message);
      navigate("/login");
    } catch (error) {
      alert("Terjadi kesalahan saat registrasi.");
    }
  };

  return (
    <div className="login-container">
      <div className="bolang-logo" />
      <div className="login-form">

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, username: true }))}
        />
        {touched.username && !isValidUsername(username) && (
          <div style={{ color: "red", fontSize: "0.85rem", marginBottom: 8 }}>
            Username harus 4–16 karakter dan hanya huruf/angka.
          </div>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        />
        {/* Checklist password muncul kalau belum valid */}
        {touched.password && !isPasswordValid && (
          <div style={{ fontSize: "0.85rem", marginBottom: "10px" }}>
            {Object.entries(passwordRules).map(([key, valid]) => (
              <div key={key} style={{ color: valid ? "green" : "red" }}>
                {valid ? "✔" : "✖"}{" "}
                {{
                  length: "Panjang 8–20 karakter",
                  hasCapital: "Minimal 1 huruf besar",
                  hasNumber: "Minimal 1 angka",
                }[key]}
              </div>
            ))}
          </div>
        )}

        {/* Konfirmasi Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="login-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Tombol Register */}
        <div className="button-container">
          <button onClick={handleRegister} className="login-button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
