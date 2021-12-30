import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pokedex from "./Pokedex";
import { PokeDexContext } from "./App";

const Home = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const { setPokedex, pokeDex } = useContext(PokeDexContext);

  const handleAddPokemon = (pokemon) => {
    setPokedex((prev) => {
      return [...prev, pokemon];
    });
  };

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemons(res.data.results);
      });
  }, []);

  return (
    <>
      Home
      <Link to="/pokedex"> PokeDex </Link>
      <div>
        <ul>
          {pokemons?.map((pokemon, index) => (
            <li key={pokemon.name}>
              {pokemon.name}
              <button onClick={() => handleAddPokemon(pokemon)}>Add</button>
              {pokeDex.some((dexPokemon) => dexPokemon.name === pokemon.name)
                ? "Adicionado"
                : ""}
              <Link to={`/pokemons/${index + 1}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
