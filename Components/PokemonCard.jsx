const typeColors = {
  fire: "#FF5733",
  water: "#4A90E2",
  grass: "#7C9B3D",
  electric: "#FFDC00",
  psychic: "#D500A2",
  ice: "#00B5E2",
  dragon: "#0F6EB8",
  dark: "#3B3B3B",
  fairy: "#F1A7D1",
  normal: "#A1A8A9",
  fighting: "#D7363B",
  flying: "#80D7F2",
  poison: "#8E44AD",
  ground: "#9C7D2D",
  rock: "#B9772E",
  bug: "#A6D36B",
  ghost: "#5B4D89",
  steel: "#A1A6A7",
};

export default function PokemonCard({ id, name, image, type, baseExp }) {
  const bgColor = typeColors[type] || "#ccc"; // fallback to grey if type is missing

  return (
    <div
      className="pokemon-card"
      to={`/${name}`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={image} alt={`${name} sprite`} />
      <div className="card-text">
        <h3 className="card-title">
          #{id} {name}
        </h3>
        <p>
          <b>Type:</b> {type}
        </p>
        <p>
          <b>Base Experience:</b> {baseExp}
        </p>
      </div>
    </div>
  );
}
