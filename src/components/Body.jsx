// import React from "react";
// import "./Body.css";
// import RestaurantCard from "./RestaurantCard";
// import mockDataList from "../utils/mockDataList.js";

// function Body() {
//   return (
//     <div className="res-container">
//     {
//       mockDataList.map((field , )=>{

//        return  <RestaurantCard key = {index} {...field}/>
//       })
//     }
//     </div>
//   );
// }

// export default Body;
import React from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import mockDataList from "../utils/mockDataList.js";

function Body() {
  // Optional: Add loading state or error handling
  if (!mockDataList?.length) {
    return <div className="no-restaurants">No restaurants found</div>;
  }

  return (
    <div className="res-container">
      {mockDataList.map((restaurant) => (
        <RestaurantCard 
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}

export default Body;