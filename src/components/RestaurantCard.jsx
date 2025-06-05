
import React from "react";
import "./RestaurantCard.css";

function RestaurantCard({ restaurant }) {
  // Destructure the individual restaurant object from props
  const { id, name, cuisines, price, averageRating, image } = restaurant;

  return (
    <div className="res-card" key={id}>
      <img
        className="res-logo"
        alt={`${name} restaurant`}
        src={image} // Use the unique image from data
      />
      <h2>{name}</h2> {/* Added restaurant name */}
      <div className="res-details">
        <p>Cuisines: {cuisines.join(", ")}</p> {/* Properly display array */}
        <div className="res-meta">
          <span>⭐ {averageRating}</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
