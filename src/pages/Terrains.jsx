import React, { useState } from "react";
import forestImg from "../assets/forest.png";
import desertImg from "../assets/desert.png";
import mountainImg from "../assets/montaña.png";
import plainsImg from "../assets/llanura.png";

const terrains = [
  {
    id: "forest",
    name: "Forest",
    description: "An area full of trees and nature.",
    image: forestImg,
  },
  {
    id: "desert",
    name: "Desert",
    description: "A vast sandy area under the sun.",
    image: desertImg,
  },
  {
    id: "mountain",
    name: "Mountains",
    description: "Elevated and rocky terrain.",
    image: mountainImg,
  },
  {
    id: "plains",
    name: "Plains",
    description: "A wide, flat piece of land.",
    image: plainsImg,
  },
];

const Terrains = () => {
  const [selectedTerrain, setSelectedTerrain] = useState(null);

  const handleSelectTerrain = (terrainId) => {
    setSelectedTerrain(terrainId);
  };

  const handleStartBuilding = () => {
    if (selectedTerrain) {
      alert(`Has elegido el terreno: ${selectedTerrain}`);
      // Redirige o avanza al siguiente paso
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 p-6 flex flex-col items-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-white">Built your City!</h1>
        <p className="text-white mt-2">
          Choose a starting plot of land to begin building on.
        </p>
      </header>

      <main className="mt-8 flex flex-wrap justify-center gap-6">
        {terrains.map((terrain) => (
          <div
            key={terrain.id}
            className={`relative w-72 h-96 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform ${
              selectedTerrain === terrain.id
                ? "scale-105 ring-4 ring-white"
                : "ring-1 ring-yellow-300"
            }`}
            onClick={() => handleSelectTerrain(terrain.id)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${terrain.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-3">
              <h3 className="text-white font-bold text-lg">{terrain.name}</h3>
              <p className="text-white text-sm">{terrain.description}</p>
            </div>
          </div>
        ))}
      </main>

      <div className="mt-8">
        <button
          onClick={handleStartBuilding}
          className={`px-6 py-3 text-black rounded-lg font-semibold ${
            selectedTerrain
              ? "bg-white hover:bg-yellow-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedTerrain}
        >
          ¡Start Building!
        </button>
      </div>
    </div>
  );
};

export default Terrains;
