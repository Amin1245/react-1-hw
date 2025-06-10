"use client";

import { useState } from "react";
import destinations from "@/./app/destination/destinations";
import PlanetCard from "@/app/destination/PlanetCard";
import styles from "@/app/destination/destination.module.css";

export default function DestinationsPage() {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    if (selectedPlanets.includes(name)) {
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {selectedPlanets.length} in your wishlist</p>
          )}
        </section>

        <section className="card">
          <h2>Possible Destinations</h2>
          <div className={styles.planetGrid}>
            {destinations.map((planet) => (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.includes(planet.name)}
                onAddOrRemovePlanet={onAddOrRemovePlanet}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
