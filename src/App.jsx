import React from "react";
import "./App.css";
import carImg from "./assets/mainscreencar.png";

export default function App() {
  return (
    <div className="app">
      <div className="top-section">
        <h1 className="title">
          Car<span>Finder</span>
        </h1>
        <img src={carImg} alt="Car" className="car-img" />
      </div>

      <div className="bottom-section">
        <input
          type="text"
          placeholder="Search for cars..."
          className="input"
        />
        <button className="btn">Check time on current rental</button>

        <input type="month" className="calendar" />

        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
        <button className="btn">Contact us</button>
      </div>
    </div>
  );
}
