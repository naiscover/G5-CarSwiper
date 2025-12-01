import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./swiper.css"; 

const CAR_DATA = [
  { id: 1, name: "Tesla Model 3", type: "Sedan", gas: "Electric", trans: "Auto", price: "$120/day", desc: "Autopilot enabled. 350 mile range.", img: "https://i.insider.com/5a872a6cd030721b008b4727?width=1200&format=jpeg" },
  { id: 2, name: "Ford Mustang", type: "Sedan", gas: "Gasoline", trans: "Manual", price: "$150/day", desc: "American muscle. V8 engine roar.", img: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Toyota RAV4", type: "SUV", gas: "Hybrid", trans: "Auto", price: "$90/day", desc: "Reliable and spacious family hauler.", img: "https://toyotacanada.scene7.com/is/image/toyotacanada/2019_Toyota_RAV4_XSE_Hybrid?ts=1688689141148&$Media-Large$&dpr=off" },
  { id: 4, name: "BMW M3", type: "Sedan", gas: "Gasoline", trans: "Auto", price: "$250/day", desc: "The ultimate driving machine.", img: "https://mediapool.bmwgroup.com/cache/P9/202405/P90550999/P90550999-the-new-bmw-m3-sedan-05-2024-2250px.jpg" },
  { id: 5, name: "Tesla Model Y", type: "SUV", gas: "Electric", trans: "Auto", price: "$150/day", desc: "Autopilot enabled. 350 mile range. Dual Motor", img: "https://image.cnbcfm.com/api/v1/image/105795204-1552623391239modelyfront34blue.jpg" },
  { id: 6, name: "Dodge Ram Sport", type: "Truck", gas: "Gasoline", trans: "Auto", price: "$200/day", desc: "Heavy-duty towing power with a Hemi V8 engine.", img: "https://hips.hearstapps.com/hmg-prod/images/2025-ram-1500-limited-crew-cab-4x4-115-67224ad21ff7c.jpg" },
  { id: 7, name: "Ford Lightning", type: "Truck", gas: "Electric", trans: "Auto", price: "$220/day", desc: "Built Ford Tough with zero emissions and Pro Power onboard.", img: "https://wwwac.ownaem.ford.com/content/dam/global-owner/ford/ca/en-ca/images/vehicles/electrics/featured-articles-carousel/Article_1.png" },
  { id: 8, name: "Jeep Wrangler", type: "SUV", gas: "Gasoline", trans: "Manual", price: "$150/day", desc: "Trail-rated 4x4. 6-speed manual for total control.", img: "https://tadvantagegroupprod-com.cdn-convertus.com/uploads/sites/238/2021/02/JEEP-WRANGLER.jpg" },
  { id: 9, name: "Tesla Cybertruck", type: "Truck", gas: "Electric", trans: "Auto", price: "$120/day", desc: "Bulletproof durability meets sports car acceleration.", img: "https://hips.hearstapps.com/hmg-prod/images/0x0-cybertruck-14-1659627054.jpg" },
];

export default function Swiper() {
  const navigate = useNavigate();
  
  // State for visibility of the filter menu
  const [showFilters, setShowFilters] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [exitDirection, setExitDirection] = useState(null);

  const [filters, setFilters] = useState({
    type: "All",
    gas: "All",
    trans: "All"
  });

  const filteredCars = useMemo(() => {
    return CAR_DATA.filter((car) => {
      const matchesType = filters.type === "All" || car.type === filters.type;
      const matchesGas = filters.gas === "All" || car.gas === filters.gas;
      const matchesTrans = filters.trans === "All" || car.trans === filters.trans;
      return matchesType && matchesGas && matchesTrans;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentIndex(0);
  };

  const nextCard = () => {
    setCurrentIndex(prev => prev + 1);
  };

  // The User Interaction Handler (Triggers Animation first)
  const handleVote = (direction) => {
    if (exitDirection) return; // Prevent double clicks

    setExitDirection(direction); // 1. Start Animation

    setTimeout(() => {
      if (direction === "right") {
        // CASE 1: USER LIKED THE CAR
        // Navigate to confirmation and pass the 'currentCar' object
        navigate("/confirm", { state: { car: currentCar } });
      } else {
        // CASE 2: USER DISLIKED
        // Just load the next card like normal
        nextCard();
        setExitDirection(null);
      }
    }, 300);
  };

  const hasMoreCars = currentIndex < filteredCars.length;
  const currentCar = hasMoreCars ? filteredCars[currentIndex] : null;

  // Helper Component for a Filter Chip
  const FilterChip = ({ label, category, value }) => (
    <button 
      className={`chip ${filters[category] === value ? "active" : ""}`}
      onClick={() => handleFilterChange(category, value)}
    >
      {label}
    </button>
  );

  return (
    <div className="app">
      {/* 1. CLEAN HEADER */}
      <div className="header-bar">
        <button onClick={() => navigate("/profile")} className="icon-btn">
          ⬅
        </button>
        <div className="page-title">Car<span>Finder</span></div>
        <button 
          onClick={() => setShowFilters(!showFilters)} 
          className="icon-btn"
          style={{ color: showFilters ? '#2563eb' : '#333' }}
        >
          {/* Settings Icon / Filter Icon */}
          ⚙️
        </button>
      </div>

      {/* 2. SLIDE-DOWN FILTER DRAWER */}
      <div className={`filter-drawer ${showFilters ? "open" : ""}`}>
        
        {/* Type Filter */}
        <div className="filter-category">
          <span className="filter-label">Vehicle Type</span>
          <div className="chip-container">
            <FilterChip label="All" category="type" value="All" />
            <FilterChip label="Sedan" category="type" value="Sedan" />
            <FilterChip label="SUV" category="type" value="SUV" />
            <FilterChip label="Truck" category="type" value="Truck" />
          </div>
        </div>

        {/* Gas Filter */}
        <div className="filter-category">
          <span className="filter-label">Fuel Type</span>
          <div className="chip-container">
            <FilterChip label="Any" category="gas" value="All" />
            <FilterChip label="Gas" category="gas" value="Gasoline" />
            <FilterChip label="EV" category="gas" value="Electric" />
          </div>
        </div>

        {/* Transmission Filter */}
        <div className="filter-category">
          <span className="filter-label">Transmission</span>
          <div className="chip-container">
            <FilterChip label="Any" category="trans" value="All" />
            <FilterChip label="Auto" category="trans" value="Auto" />
            <FilterChip label="Manual" category="trans" value="Manual" />
          </div>
        </div>

        <button className="close-filters-btn" onClick={() => setShowFilters(false)}>
          Apply Filters ({filteredCars.length} results)
        </button>
      </div>

      {/* 3. CARD DISPLAY */}
      <div className="card-container">
        {currentCar ? (
          <div className={`card ${exitDirection ? `swipe-${exitDirection}` : ""}`}>
            <img src={currentCar.img} alt={currentCar.name} className="card-image" />
            <div className="card-details">
              <h2 className="card-title">{currentCar.name}</h2>
              <div className="tags">
                <span className="tag">{currentCar.type}</span>
                <span className="divider">/</span>
                <span className="tag">{currentCar.gas}</span>
                <span className="divider">/</span>
                <span className="tag">{currentCar.trans}</span>
              </div>
              <p className="card-price">{currentCar.price}</p>
              <p className="card-desc">{currentCar.desc}</p>

              <div className="action-buttons">
                <button className="circle-btn dislike" onClick={() => handleVote("left")}>✕</button>
                <button className="circle-btn like" onClick={() => handleVote("right")}>♥</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-results">
            <h3>No cars found</h3>
            <p>Try adjusting your filters.</p>
            <button 
              className="btn" 
              style={{marginTop: '20px', background: '#2563eb', color: 'white'}}
              onClick={() => {
                setFilters({ type: "All", gas: "All", trans: "All" });
                setShowFilters(true);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}