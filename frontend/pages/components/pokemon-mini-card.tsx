import { Pokemon } from "@/lib/pokemon";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function removeFromTeam(
    mon: Pokemon,
    team: Pokemon[],
    setTeam: Dispatch<SetStateAction<Pokemon[]>>,
): void {
    const newTeam = team.filter((poke) => poke !== mon);
    setTeam(newTeam);
}

export default function MiniCard({
    pokemon,
    team,
    setTeam,
}: {
    pokemon: Pokemon;
    team: Pokemon[];
    setTeam: Dispatch<SetStateAction<Pokemon[]>>;
}) {
    if (pokemon === undefined || pokemon.name === "") {
        return <></>;
    }

    return (
        <div className="flex w-auto m-3 ">
            <div className="w-[100px] h-[100px] mx-3">
                <Image
                    src={pokemon.sprites.front_default}
                    alt="pokemon-sprite"
                    width={100}
                    height={100}
                    className="mx-[5px]"
                />
            </div>
            <div className="flex flex-col my-1">
                {pokemon.types.map((type, i) => (
                    <div key={i}>
                        <Image
                            src={`/${type.type.name}.svg`}
                            alt="type-icon"
                            width={25}
                            height={25}
                            className="m-[3px]"
                        />
                        <h4>{type.type.name}</h4>
                    </div>
                ))}
            </div>

            <div className="px-4 align-middle">
                <button
                    onClick={() => {
                        removeFromTeam(pokemon, team, setTeam);
                    }}
                    className="h-[20px] w-[20px]"
                >
                    <Image
                        src={`/trash-can-solid.svg`}
                        alt="icon to discard pokemon from team"
                        height={17.14}
                        width={15}
                    />
                </button>
            </div>
        </div>
    );
}
