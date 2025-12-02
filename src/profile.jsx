import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/pfp.png"; // Replace with actual profile pic
import carImg from "./assets/mainscreencar.png"; // Example car image
import CountdownTimer from "./Countdown"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Welcome() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "Guest";
    
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="phone-container">
      <div className="phone-app">
        {/* Top bar */}
        <div className="header-bar">
        <button onClick={() => navigate("/")} className="icon-btn">
          ⬅
        </button>
        <div className="page-title">Car<span>Swiper</span></div>
        <img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/review", { state: { username } })}
        />
      </div>
        <hr className="divider" />
        <div className="top-bar">
          <h1 className="welcome-text">Welcome, {username}!</h1>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>

        {/* Main content */}
        <div className="main-content">
              <button
                className="btn"
                style={{ marginBottom: "20px" }} // spacing below button
                onClick={() => navigate("/swiper")}
            >
                Go to Swiper
            </button>
          {/* Current Car Box */}
          
          <div className="box current-car">
            <h2>Current Car</h2>
            <p>Ford Lightning</p>
            
            <img src={'https://wwwac.ownaem.ford.com/content/dam/global-owner/ford/ca/en-ca/images/vehicles/electrics/featured-articles-carousel/Article_1.png'} alt="Car" className="car-img" />
            <p>Time Left: <CountdownTimer /></p>
          </div>

                    {/* Extra Stats Box */}
            <div className="box stats-box">
            <h2>Car Stats</h2>
            <ul>
                <li><strong>Miles Driven:</strong> 142 miles</li>
                <li><strong>Battery Level:</strong> 78%</li>
                <li><strong>Rental Cost:</strong> $12 / hour</li>
                <li><strong>Fuel Type:</strong> Electric</li>
            </ul>
            </div>

            {/* Membership Box */}
            <div className="box membership-box">
            <h2>Membership</h2>
            <p>Level: <strong>Premium</strong></p>
            <p>Reward Points: <strong>420 pts</strong></p>
            <p>Next Reward: <strong>Free 2-hour rental at 500 pts</strong></p>
            </div>

          {/* Cars Borrowed Box */}
          <div className="box cars-borrowed">
            <h2>Borrowed History</h2>
            <ul>
              <li>Ford Lightning: Oct 24th</li>
              <li>Jeep Wrangler: July 7th</li>
              <li>Tesla Cybertruck: Jan 17th</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
