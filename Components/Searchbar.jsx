export default function Searchbar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, name: e.target.value.toLowerCase() });
  };

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>{" "}
      <input
      type="text"
      placeholder="Search Pokémon by name..."
      value={filters.name}
      onChange={handleChange}
      className="search-input"
    />
    </div>
  );
}