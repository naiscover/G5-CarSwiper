import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 
import carImg from "./assets/mainscreencar.png"; 

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Simple email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSignup = () => {
    if (username.length < 4) {
      setError("Username must be at least 4 characters long.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(""); // Clear error if valid
    alert("Signup successful!"); // Replace with actual signup logic
    navigate("/login"); // Redirect to login after signup
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

        {/* Username Header */}
        <h2>Username</h2>
        <input
          type="text"
          placeholder="Enter your username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email Header */}
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Header */}
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error Message */}
        {error && <p style={{ color: "red", marginLeft: "10px" }}>{error}</p>}

        {/* Signup Button */}
        <button className="btn" onClick={handleSignup} style={{ marginTop: "30px" }}>
          Sign Up
        </button>

        {/* Back Button */}
        <button className="btn" onClick={() => navigate("/")}>
          Back
        </button>

      </div>
    </div>
  );
}
