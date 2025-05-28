import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css"
function Body() {
  return (
    <div className="res-container">
    
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
}

export default Body;
