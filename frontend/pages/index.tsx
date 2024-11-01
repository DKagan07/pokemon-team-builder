import { useContext, useState } from "react";
import PokemonStats from "./components/pokemon-stats";
import { InitialPokeSetter, Pokemon, /* TestPkmn */ } from "@/lib/pokemon";
import MiniCard from "./components/pokemon-mini-card";
import { DataContext } from "./context/dataContext";
import TopBar from "./components/topbar";
// import { getJWTFromCookie } from "./signup";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface HomeProps {
    pokemonTeamFromServer: Pokemon[]
}

export default function Home(props: HomeProps) {
    const { pokemonTeamFromServer } = props
    console.log({ pokemonTeamFromServer })

    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon>(InitialPokeSetter);
    const [pokemonTeam, setPokemonTeam] = useState<Pokemon[]>(pokemonTeamFromServer);
    const { pokemonState, setPokemonState } = useContext(DataContext);

    // fetchPokemon gets the pokemon information 
    const fetchPokemon = async (name: string) => {
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
                        fetchPokemon(pokemonName);
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

// We get the token here, if the token is present, then we know someone  is
// logged in and we should fetch the information and populate it
//
// The idea of this getServerSideProps is just to get the cookies. If the cookie
// is present, then we know the user has logged in and we should somewhat
// populate the pokemon teams
//
// TODO: Setup such that if the cookie is present, we can have some setting of
// the state in the main Home(). 
export const getServerSideProps: GetServerSideProps<ParsedUrlQuery> = async (context: GetServerSidePropsContext) => {
    const { req } = context
    const cookie = req.cookies
    console.log({ cookie })
    if (!cookie) {
        return {
            props: {
                message: "no cookie present"
            }
        }
    }

    const token = cookie["token"]
    console.log({ token })


    // This will eventually get filled in with the teams, with the
    // implementation of the teams endpoint
    return {
        props: {
            pokemonTeamFromServer: [],
        }
    }
}

