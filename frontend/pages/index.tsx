import { useState } from "react";
import PokemonStats from "./components/pokemon-stats";
import { InitialPokeSetter, Pokemon } from "@/lib/pokemon";
// import Conditional from "./components/conditional";

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>(InitialPokeSetter);

  const fetchMessage = async (name: string) => {
    console.log({ name });
    // const response = await fetch(`http://localhost:3001/${name}`);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/jigglypuff/`,
    );
    const data = await response.json();
    console.log({ data });

    setPokemon(data);
  };

  return (
    <div className="p-2">
      <p className="bold text-2xl mx-3 p-2">Search Pokemon Stats</p>
      <form id="pokename-form" className="flex">
        <input
          id="pokename"
          type="text"
          name="pokename"
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Search pokemon"
          className="placeholder:italic placeholder:text-gray-400 placeholder:p-1 border border-gray-300 rounded-md h-100% mx-3 "
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchMessage(pokemonName);
          }}
          className="py-1 px-3 bg-gray-200 hover:bg-gray-300 rounded-lg h-100% font-semibold"
        >
          Search
        </button>
      </form>

      <PokemonStats pokemon={pokemon} />
    </div>
  );
}
