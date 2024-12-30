import { Pokemon } from "@/lib/pokemon";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { State } from "../context/dataContext";

function removeFromTeam(
    mon: Pokemon,
    team: Pokemon[],
    state: State,
    setTeam: Dispatch<SetStateAction<Pokemon[]>>,
    setState: Dispatch<SetStateAction<State>>
): void {
    const newTeam = team.filter((poke) => poke !== mon);
    setTeam(newTeam);
    setState({ Pokemon: mon, PokemonTeam: newTeam, UserLoggedIn: state.UserLoggedIn })
}

export default function MiniCard({
    pokemon,
    team,
    state,
    setTeam,
    setData,
    item,
}: {
    pokemon: Pokemon;
    team: Pokemon[];
    state: State,
    setTeam: Dispatch<SetStateAction<Pokemon[]>>;
    setData: Dispatch<SetStateAction<State>>;
    item: number;
}) {
    if (pokemon === undefined || pokemon.name === "") {
        return <></>;
    }

    return (
        <div>
            <div className="flex w-auto m-3 ">
                <p>{item}</p>
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
                            removeFromTeam(pokemon, team, state, setTeam, setData);
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
            <div className="flex justify-center align-middle">
                <Link href={`/${pokemon.name}/moves`}>
                    <button
                        className="border border-black rounded-md w-auto px-1"
                        onClick={() => {
                            setData({ Pokemon: pokemon, PokemonTeam: team, UserLoggedIn: state.UserLoggedIn });
                        }}
                    >
                        See moves
                    </button>
                </Link>
            </div>
        </div>
    );
}
