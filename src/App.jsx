import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import PokemonList from "./pages/listpokemon.jsx";
import PokemonDetail from "./pages/pokemondetail.jsx";

export default function App() {
  // Guarda los pokémons favoritos
  const [favoritos, setFavoritos] = useState([]);

  // Carga favoritos guardados del localStorage (si existen)
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardados);
  }, []);

  // Cada vez que cambia la lista, la guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Agrega o quita un Pokémon de favoritos
  const toggleFavorito = (poke) => {
    const existe = favoritos.find((f) => f.name === poke.name);
    if (existe) {
      setFavoritos(favoritos.filter((f) => f.name !== poke.name));
    } else {
      setFavoritos([...favoritos, poke]);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home favoritos={favoritos} />}
          />
          <Route
            path="/pokemons"
            element={<PokemonList favoritos={favoritos} toggleFavorito={toggleFavorito} />}
          />
          <Route
            path="/pokemons/:idOrName"
            element={<PokemonDetail favoritos={favoritos} toggleFavorito={toggleFavorito} />}
          />
        </Routes>
      </main>
    </>
  );
}
