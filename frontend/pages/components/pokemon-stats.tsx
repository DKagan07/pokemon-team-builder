import { Pokemon } from "@/lib/pokemon";
import Image from "next/image";

export default function PokemonStats({ pokemon }: { pokemon: Pokemon }) {
  if (pokemon === undefined || pokemon.name === "") {
    return <></>;
  }

  let total = 0;
  pokemon.stats.map((stat) => {
    total += stat.base_stat;
  });

  return (
    <div>
      <Image src={pokemon.sprites.front_default} alt="pokemon-sprite" />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <br />
      {pokemon.stats.map((stat) => (
        <>
          <span>
            <b>{stat.stat.name}</b>: {stat.base_stat}
          </span>
          <br />
        </>
      ))}
      <b>TOTAL: {total}</b>
    </div>
  );
}
