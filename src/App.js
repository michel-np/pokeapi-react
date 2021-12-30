import React, { createContext, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";
import PokemonDetail from "./PokemonDetail";

export const PokeDexContext = createContext();

export default function App() {
  const [pokeDex, setPokedex] = useState([]);
  return (
    <PokeDexContext.Provider value={{ pokeDex, setPokedex }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/pokemons/:pokemonId">
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </PokeDexContext.Provider>
  );
}
