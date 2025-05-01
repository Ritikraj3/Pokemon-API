import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonListShimmer } from "./PokemonListShimmer";

export default function PokemonList({ filters }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log("fetching pokemon")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then(async (data) => {
        // console.log(data)
        // console.log(data.results)
        const details = await Promise.all(
          data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
        );
        console.log(details)
        setPokemonData(details);
      })
      .catch((err) => {
        console.error("Failed to fetch Pokémon:", err);
        setError(true);
      });
  }, []);
  
  if (error) return <p className="error-message">Failed to load Pokémon. Try again later.</p>;

  const filteredData = pokemonData.filter((pokemon) => {
    const matchName = filters.name === "" || pokemon.name.includes(filters.name);
    const matchType =
      filters.type === "" || pokemon.types.some((t) => t.type.name === filters.type);
    return matchName && matchType;
  });

  if (!pokemonData.length) {
    return <PokemonListShimmer />; 
  }

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-count">
        Showing {filteredData.length} of {pokemonData.length} Pokémon
      </div>

      {filteredData.length === 0 ? (
        <p className="no-results">No Pokémon found!</p>
      ) : (
        <div className="pokemon-container">
          {filteredData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
              baseExp={pokemon.base_experience}
            />
          ))}
        </div>
      )}
    </div>
  );
}
