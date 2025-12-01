import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./confirmation.css"; // We'll create this css next

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve the car data passed from Swiper
  // The ?. check prevents crashing if someone visits this page directly
  const car = location.state?.car;

  // Generate a random pickup time for realism
  const pickupDate = new Date();
  pickupDate.setDate(pickupDate.getDate() + 1); // Tomorrow
  const dateString = pickupDate.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' });

  if (!car) {
    return (
      <div className="error-page">
        <h2>No car selected</h2>
        <button onClick={() => navigate("/swiper")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="confirm-container">
      {/* 1. Success Animation/Header */}
      <div className="confirm-header">
        <div className="checkmark-circle">✓</div>
        <h1>Booking Confirmed!</h1>
        <p>Your ride is reserved.</p>
      </div>

      {/* 2. The Digital Ticket */}
      <div className="ticket-card">
        <img src={car.img} alt={car.name} className="ticket-img" />
        
        <div className="ticket-details">
          <h2>{car.name}</h2>
          <span className="ticket-sub">{car.type} • {car.gas}</span>
          
          <div className="divider-line"></div>

          <div className="info-row">
            <div className="info-block">
              <label>PICK-UP LOCATION</label>
              <p>LAX Airport<br/>Terminal 4, Zone B</p>
            </div>
            <div className="info-block">
              <label>TIME</label>
              <p>{dateString}<br/>10:00 AM</p>
            </div>
          </div>

          <div className="total-row">
            <span>Daily Rate</span>
            <span className="price">{car.price}</span>
          </div>
        </div>
      </div>

      {/* 3. Action Buttons */}
      <button className="home-btn" onClick={() => navigate("/profile")}>
        Back to Home
      </button>
    </div>
  );
}