import React from "react";

const ResidentInformation = ({ specie, origin, episode }) => {
  return (
    <div className="container-information">
      <p>RAZA</p>
      <h4>{specie}</h4>
      <p>ORIGEN</p>
      <h4>{origin}</h4>
      <p>APARICI0N EN EPISODIOS</p>
      <h4>{episode}</h4>
    </div>
  );
};

export default ResidentInformation;
