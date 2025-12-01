import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import carImg from "./assets/mainscreencar.png";

export default function App() {
  const navigate = useNavigate(); // hook for navigation

  return (
    <div className="app">
      <div className="top-section">
        <h1 className="title">
          Car<span>Swiper</span>
        </h1>
        <img src={carImg} alt="Car" className="car-img" />
      </div>

      <div className="bottom-section-app">
        {/* Login */}
        <button className="btn" onClick={() => navigate("/login")}>
          Login
        </button>

        {/* Sign Up */}
        <button className="btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
