const types = [
  "normal", "fire", "water", "grass", "electric",
  "ice", "fighting", "poison", "ground", "flying",
  "psychic", "bug", "rock", "ghost", "dark",
  "dragon", "steel", "fairy"
];

export default function SelectMenu({ filters, setFilters }) {
  const handleSelect = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  return (
    <select value={filters.type} onChange={handleSelect} className="filter-by-type">
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
