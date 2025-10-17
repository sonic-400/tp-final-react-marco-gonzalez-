import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PokemonDetail() {
  // Toma el nombre o ID del Pokémon desde la URL (por ejemplo: /pokemons/pikachu)
  const { idOrName } = useParams();

  // estados: guardan los datos del pokémon y si está cargando
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Al entrar a la página, pide los datos del Pokémon a la API
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data); // guarda los datos en el estado
        setCargando(false);
      })
      .catch((error) => {
        console.log("Error al traer el detalle:", error);
        setCargando(false);
      });
  }, [idOrName]); // se ejecuta cada vez que cambia el Pokémon

  // Mensajes de carga o error
  if (cargando) return <p>Cargando información...</p>;
  if (!pokemon) return <p>No se encontró el Pokémon.</p>;

  // Muestra los datos cuando ya están cargados
  return (
    <div className="container">
      {/* Botón para volver al listado */}
      <Link to="/pokemons" className="volver">← Volver al listado</Link>

      <div className="detalle">
        {/* Imagen oficial */}
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />

        <div>
          {/* Nombre */}
          <h1 style={{ textTransform: "capitalize" }}>{pokemon.name}</h1>

          {/* Datos básicos */}
          <p><b>Altura:</b> {pokemon.height / 10} m</p>
          <p><b>Peso:</b> {pokemon.weight / 10} kg</p>

          {/* Tipos */}
          <p>
            <b>Tipos:</b> {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>

          {/* Habilidades */}
          <p>
            <b>Habilidades:</b> {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
