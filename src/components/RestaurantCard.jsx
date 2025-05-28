import React from "react";
import "./RestaurantCard.css";
function RestaurantCard() {
  return (
    <div className="res-card">

       <img className = "image" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194211/Burger-King.png"/>
      <h3>Burger King</h3>
    
    <div className="info">
      <h4>Burgers, Fast Foods , Non-Veg , South Indian </h4>
      <h4>4.4 </h4>
      <h4>30 minutes</h4>
    </div>
    </div>
  );
}

export default RestaurantCard;
