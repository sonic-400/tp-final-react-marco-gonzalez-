import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Recibe favoritos y la función para togglear desde App.jsx
export default function ListPokemon({ favoritos, toggleFavorito }) {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Pide 24 pokémons a la API al cargar la página
    fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
      .then((res) => res.json())
      .then((info) => {
        setDatos(info.results);   // guarda la lista
        setCargando(false);       // termina la carga
      })
      .catch((error) => {
        console.log("Error al traer los pokemons:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando pokémons...</p>;

  // Saber si un nombre está en favoritos
  const esFavorito = (name) => favoritos.some((f) => f.name === name);

  return (
    <div className="container">
      <h1>Listado de Pokémons</h1>

      <div className="grilla">
        {datos.map((poke, i) => {
          // imagen simple basada en posición (va bien para los primeros 24)
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;

          return (
            <div key={poke.name} className="tarjeta">
              {/* Botón de favorito (corazón) */}
              <button
                className={`boton-fav ${esFavorito(poke.name) ? "activo" : ""}`}
                onClick={() => toggleFavorito({ name: poke.name, imagen: img })}
                title={esFavorito(poke.name) ? "Quitar de favoritos" : "Agregar a favoritos"}
                aria-label="Favorito"
                style={{ float: "right" }}
              >
                ♥
              </button>

              {/* Card clickeable al detalle */}
              <Link to={`/pokemons/${poke.name}`}>
                <img src={img} alt={poke.name} />
                <h3>{poke.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
