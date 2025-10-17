import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {/* Marca o título del sitio */}
      <div className="nav-marca">PokeReact</div>

      {/* Enlaces de navegación */}
      <div className="enlaces">
        <Link to="/">Inicio</Link>
        <Link to="/pokemons">Pokémons</Link>
      </div>
    </nav>
  );
}
