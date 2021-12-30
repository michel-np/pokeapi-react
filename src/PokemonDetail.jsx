import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});
  const { pokemonId } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => {
      setPokemon(res.data);
    });
  }, [pokemonId]);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokedex</Link>
      {pokemonId}
      {pokemon.name}
      {JSON.stringify(pokemon.abilities)}
    </>
  );
};

export default PokemonDetail;
