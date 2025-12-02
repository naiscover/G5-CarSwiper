import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 
import carImg from "./assets/mainscreencar.png"; 

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Username requirement
    if (username.length < 4) {
      setError("Username must be at least 4 characters long.");
      return;
    }
    // Password requirement
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(""); // Clear error if valid

    // ⭐ Pass username to /profile
    navigate("/profile", { state: { username } });
  };

  return (
    <div className="app">
      <div className="top-section">
        <h1 className="title">
          Car<span>Swiper</span>
        </h1>
        <img src={carImg} alt="Car" className="car-img" />
      </div>

      <div className="bottom-section">
        <h2>Username</h2>
        <input
          type="text"
          placeholder="Enter your username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", marginLeft: "10px" }}>{error}</p>
        )}

        {/* ✔ Button now uses handleLogin */}
        <button className="btn" onClick={handleLogin} style={{ marginTop: "30px" }}>
          Login
        </button>

        <button className="btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
}
