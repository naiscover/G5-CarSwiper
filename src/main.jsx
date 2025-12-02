import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Swiper from "./swiper"; 
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Confirmation from "./confirmation";
import Review from "./review";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/swiper" element={<Swiper />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="/profile" element={<Profile username="User" />} />
      <Route path="/review" element={<Review />} /> 
    </Routes>
  </BrowserRouter>
);
