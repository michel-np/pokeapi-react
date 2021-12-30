import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {PokeDexContext} from './App';

const Pokedex = () => {
  const {pokeDex} = useContext(PokeDexContext)
  return (
    <>
      Pokedex
      <Link to="/">Home</Link>
      <h2>Meus pokemons</h2>
      <ul>
      {pokeDex?.map(pokemon => (
        <li>
          {pokemon.name}
        </li>
        ))}
      </ul>

    </>
  );
};

export default Pokedex;
