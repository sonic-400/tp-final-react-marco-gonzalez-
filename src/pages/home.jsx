import { Link } from "react-router-dom";

export default function Home({ favoritos }) {
  return (
    <div className="container">
      {/* Encabezado principal */}
      <div className="presentacion">
        <span>TP Final · React + Vite</span>
        <h1>PokeReact — Trabajo Práctico Final de Marco González</h1>
        <p>
          Este sitio fue desarrollado como parte del trabajo integrador del curso de React. 
          El objetivo fue crear una aplicación web con varias páginas, 
          usando componentes reutilizables, rutas y consumo de datos desde una API externa.
        </p>

        {/* Herramientas usadas */}
        <div className="tecnologias">
          <span className="tecnologia">Vite</span>
          <span className="tecnologia">React</span>
          <span className="tecnologia">Router DOM</span>
          <span className="tecnologia">PokeAPI</span>
        </div>

        {/* Botones principales */}
        <div className="botones">
          <Link className="boton boton-rojo" to="/pokemons">
            Ver Pokémons
          </Link>
          <a
            className="boton boton-borde"
            href="https://pokeapi.co"
            target="_blank"
            rel="noreferrer"
          >
            Ver PokeAPI
          </a>
        </div>
      </div>

      {/* Descripción del proyecto */}
      <div className="bloque">
        <h2>Sobre el proyecto</h2>
        <p>
          En este trabajo se aplicaron los temas vistos durante el curso, 
          como manejo de estado, enrutamiento con React Router DOM y consumo de una API REST. 
          También se trabajó el diseño responsive y el uso de componentes reutilizables.
        </p>
      </div>
      {/* Opinión personal / toque final */}
<div className="bloque">
  <h2>Opinión personal</h2>
  <p>
    Nunca fui de mirar mucho Pokémon, pero sí llegué a jugar la versión 
    <strong> Rojo Fuego</strong>, en emulador, hace varios años. Mi Pokémon favorito creo que era un
    <strong> Pidgeot</strong>, porque tenía uno en mi equipo que siempre me hacía ganar. 
    Las imagenes de los pokemones pixelados me trae recuerdos xD
  </p>
</div>


      {/* Sección de favoritos */}
      <div className="bloque">
        <h2>Pokémon Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>Todavía no agregaste ninguno.</p>
        ) : (
          <div className="grilla">
            {favoritos.map((f) => (
              <Link key={f.name} to={`/pokemons/${f.name}`} className="tarjeta">
                <img src={f.imagen} alt={f.name} />
                <h3>{f.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Pie de página */}
      <p className="pie">Hecho por Marco González · 2025</p>
    </div>
  );
}
