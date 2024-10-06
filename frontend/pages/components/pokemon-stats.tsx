import { Pokemon } from "@/lib/pokemon";

export default function PokemonStats({ pokemon }: { pokemon: Pokemon }) {
  if (pokemon === undefined) {
    return <></>;
  }
  return (
    <div>
      <h3>{pokemon.name}</h3>
      {pokemon.moves.map((move) => (
        <>
          <p>{move.move.name}</p>
        </>
      ))}
    </div>
  );
}
