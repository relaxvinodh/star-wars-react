import React from 'react';
import './styles.css';

export default ({ planet, clearPlanetDetails }) =>
<section className="planet-details">
  <h2 className="planet-details__header">{planet.name}</h2>
  <div className="planet-details__clear" onClick={clearPlanetDetails}>X</div>
  <div className="planet-details__sections">
    <div className="planet-details__detail">Gravity: {planet.gravity}</div>
    <div className="planet-details__detail">Population: {planet.population}</div>
    <div className="planet-details__detail">Climate: {planet.climate}</div>
    <div className="planet-details__detail">Terrain: {planet.terrain}</div>
  </div>
  <div className="planet-details__sections">
    <div className="planet-details__detail">Orbital Period: {planet.orbital_period}</div>
    <div className="planet-details__detail">Rotation Period: {planet.rotation_period}</div>
  </div>
</section>
