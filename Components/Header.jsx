export default function Header() {
  const logo = new URL("../assets/pngegg.png", import.meta.url).href;
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="./">
            <img src={logo} alt="image" />
          </a>
        </h2>
        <h2 className="pokemon-heading" >PokéSpot</h2>
      </div>
    </header>
  );
}
