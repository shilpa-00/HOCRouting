import React from "react";

const TeamDetails = ({ name, city, coach }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>City: {city}</p>
      <p>Coach: {coach}</p>
    </div>
  );
};

export default TeamDetails;