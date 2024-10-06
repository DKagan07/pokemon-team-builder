// import Image from "next/image";
// import localFont from "next/font/local";
import { useState } from "react";
import PokemonStats from "./components/pokemon-stats";
import { InitialPokeSetter, Pokemon } from "@/lib/pokemon";
import Conditional from "./components/conditional";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>(InitialPokeSetter);

  const fetchMessage = async (name: string) => {
    console.log({ name });

    const response = await fetch(`http://localhost:3001/${name}`);
    const data = await response.json();
    console.log({ data });

    setPokemon(data);
    console.log({ pokemon });
  };

  return (
    <>
      <form id="pokename-form">
        <input
          id="pokename"
          type="text"
          name="pokename"
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchMessage(pokemonName);
          }}
        >
          Search Pokemon
        </button>
      </form>

      <Conditional showWhen={pokemon !== undefined}>
        <PokemonStats pokemon={pokemon} />
      </Conditional>
    </>
  );
}
