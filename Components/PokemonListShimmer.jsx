import React from "react";
import "./PokemonListShimmer.css";

export const PokemonListShimmer = () => {
  // new Array(10).fill('')

  return (
    <div className="pokemon-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return (
          <div key={i} className="pokemon-card shimmer-card">
            <div className="image-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}