import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/pfp.png";
import { useNavigate, useLocation } from "react-router-dom";

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
        <button onClick={() => navigate("/profile")} className="icon-btn">
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

        {/* Main content */}
        <div className="main-content" style={{ textAlign: "center" }}>
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic-review"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/review", { state: { username } })}
          />
          <h1 className="name-text">{username}</h1>

          {/* Profile Description */}
          <div className="box profile-description">
            <h2>About Me</h2>
            <p>This is the profile description! Update your bio here.</p>
          </div>

          {/* Profile Stats */}
          <div className="box stats-box">
            <h2>Profile Stats</h2>
            <ul>
              <li><strong>Reviews Done:</strong> 12</li>
              <li><strong>Past Reviews:</strong> 8</li>
              <li><strong>Cars Borrowed:</strong> 5</li>
              <li><strong>Membership Level:</strong> Premium</li>
            </ul>
          </div>

          {/* Preferences Box */}
          <div className="box preferences-box">
            <h2>Preferences</h2>
            <ul>
              <li>Favorite Car Type: Electric</li>
              <li>Preferred Rental Duration: 2-4 hours</li>
            </ul>
          </div>

          {/* Past Reviews */}
          <div className="box past-reviews">
            <h2>Past Reviews</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <strong>Ford Lightning:</strong> ⭐⭐⭐⭐⭐
                <p>"Smooth ride, very clean and efficient."</p>
              </li>
              <li>
                <strong>Jeep Wrangler:</strong> ⭐⭐⭐⭐
                <p>"Fun off-road experience, but a bit noisy."</p>
              </li>
              <li>
                <strong>Tesla Cybertruck:</strong> ⭐⭐⭐⭐⭐
                <p>"Amazing acceleration and futuristic design!"</p>
              </li>
            </ul>
          </div>

          {/* Achievements Box */}
          <div className="box achievements-box">
            <h2>Achievements</h2>
            <ul>
              <li>Rented 10 cars 🎉</li>
              <li>Left 5 reviews 📝</li>
              <li>Premium Member ⭐</li>
            </ul>
          </div>

          {/* Upcoming Rentals Box */}
          <div className="box upcoming-rentals">
            <h2>Upcoming Rentals</h2>
            <ul>
              <li>BMW i8 – Dec 5th</li>
              <li>Mustang GT – Dec 12th</li>
            </ul>
          </div>

          {/* Friends / Connections Box */}
          <div className="box friends-box">
            <h2>Connections</h2>
            <ul>
              <li>Alice Johnson</li>
              <li>Bob Smith</li>
            </ul>
          </div>
                    <div className="box cars-borrowed">
            <h2>Settings</h2>
             <button
            className="btn"
            style={{ marginBottom: "20px" }} // spacing below button
            onClick={() => navigate("/swiper")}
            >
            Personal Info
            </button>       
            <button
            className="btn"
            style={{ marginBottom: "20px" }} // spacing below button
            onClick={() => navigate("/swiper")}
            >
            Payment Methods
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
