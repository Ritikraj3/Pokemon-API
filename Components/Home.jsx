import { useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import PokemonList from "./PokemonList";

export default function Home() {
  const [filters, setFilters] = useState({ name: "", type: "" });

  return (
    <main>
      <div className="search-filter-container">
        <Searchbar filters={filters} setFilters={setFilters} />
        <SelectMenu filters={filters} setFilters={setFilters} />
      </div>
      <PokemonList filters={filters} />
    </main>
  );
}
