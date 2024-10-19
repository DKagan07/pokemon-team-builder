import { useContext, useState } from "react";
import PokemonStats from "./components/pokemon-stats";
import { InitialPokeSetter, Pokemon, /* TestPkmn */ } from "@/lib/pokemon";
import MiniCard from "./components/pokemon-mini-card";
import { DataContext } from "./context/dataContext";
import { TopBar } from "./components/topbar";

export default function Home() {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon>(InitialPokeSetter);
    const [pokemonTeam, setPokemonTeam] = useState<Pokemon[]>([]);
    const { pokemonState, setPokemonState } = useContext(DataContext);

    const fetchMessage = async (name: string) => {
        // For names that have a space, ex. Iron Hands, we need to change it to:
        // "iron-hands"
        name = name.trim().replace(" ", "-").toLowerCase();
        console.log({ name });
        // const response = await fetch(`http://localhost:3001/${name}`);

        // This is just for local, FE-only development to hit the API:
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

        const data = await response.json();
        setPokemon(data);
        setPokemonState({ Pokemon: data, PokemonTeam: pokemonTeam })
    };


    const statsObj: { [key: string]: number } = {};
    let total = 0;
    pokemon.stats.map((stat) => {
        statsObj[stat.stat.name] = stat.base_stat;
        total += stat.base_stat;
    });

    console.log("pokemon state Pokemon at home page: ", pokemonState.Pokemon)
    console.log("pokemon state team at home page: ", pokemonState.PokemonTeam)
    console.log("pokemon team at home page: ", pokemonTeam)
    return (
        <div className="flex flex-col p-2">
            <TopBar />
            <p className="bold text-2xl mx-3 p-2">Search Pokemon Stats</p>
            <form id="pokename-form" className="flex">
                <input
                    id="pokename"
                    type="text"
                    name="pokename"
                    onChange={(e) => setPokemonName(e.target.value)}
                    placeholder="Search pokemon"
                    className="placeholder:italic placeholder:text-gray-400 placeholder:p-1 border border-gray-300 rounded-md h-100% mx-3 indent-2"
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

            <div className="flex-col align-middle ">
                <PokemonStats pokemon={pokemon} statsObj={statsObj} />
                {pokemon === undefined || pokemon.name === "" ? (
                    <></>
                ) : (
                    <div
                        id="stat-footer"
                        className="flex w-[365px] justify-around align-middle m-2"
                    >
                        <div className="flex justify-center align-middle h-auto pt-1">
                            <b>Total Base Stats: {total}</b>
                        </div>
                        {pokemonTeam.length >= 6 ? (
                            <></>
                        ) : (
                            <button
                                className="p-1 bg-gray-200 hover:bg-gray-300 rounded-lg h-100% w-auto font-semibold"
                                onClick={() => {
                                    setPokemonTeam([...pokemonTeam, pokemon]);
                                    // setPokemonState({ PokemonTeam: pokemonTeam, Pokemon: pokemon });
                                }}
                            >
                                Add to team
                            </button>
                        )}
                    </div>
                )}
            </div>

            {pokemonState.PokemonTeam.length > 0 || pokemonTeam.length > 0 ? (
                <div className="flex justify-center align-middle pt-3">
                    <p className="text-2xl font-bold ">Your team:</p>
                </div>
            ) : (
                <></>
            )
            }
            {pokemonState.PokemonTeam.length > pokemonTeam.length ? (
                <div className="grid grid-cols-3 gap-2 w-full place-items-center p-2">
                    {pokemonState.PokemonTeam.map((mon, i) => (
                        <MiniCard
                            key={i}
                            item={i + 1}
                            pokemon={mon}
                            team={pokemonTeam}
                            setTeam={setPokemonTeam}
                            setData={setPokemonState}
                        />
                    ))}
                </div>
            ) : pokemonTeam.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 w-full place-items-center p-2">
                    {pokemonTeam.map((mon, i) => (
                        <MiniCard
                            key={i}
                            item={i + 1}
                            pokemon={mon}
                            team={pokemonTeam}
                            setTeam={setPokemonTeam}
                            setData={setPokemonState}
                        />
                    ))}
                </div>
            ) : (
                <></>
            )
            }
        </div >
    );
}

