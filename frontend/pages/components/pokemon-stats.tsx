import { ReactNode } from "react";
import { Pokemon } from "../types/pokemon";

export function Conditional({
  showWhen,
  children,
}: {
  showWhen: boolean;
  children: ReactNode;
}) {
  if (showWhen) return <div>{children}</div>;
  return <></>;
}

export function PokemonStats({ pokemon }: { pokemon: Pokemon }) {
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
