import { useContext, useState } from "react";
import PokemonStats from "./components/pokemon-stats";
import { InitialPokeSetter, Pokemon, /* TestPkmn */ } from "@/lib/pokemon";
import MiniCard from "./components/pokemon-mini-card";
import { DataContext } from "./context/dataContext";
import TopBar from "./components/topbar";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface HomeProps {
    message?: string
    pokemonTeamFromServer: Pokemon[]
    isLoggedIn: boolean
}

// NOTE: All backend calls that require a user to be logged in should:
// 1. Be checked first to see if a user is logged in, based on presence of
//      cookie
// 2. The auth token from the cookie should be prefaced by "Bearer " (with the 
//      space) so our backend can verify it

export default function Home(props: HomeProps) {
    const { pokemonTeamFromServer, isLoggedIn, message } = props

    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState<Pokemon>(InitialPokeSetter);
    const [pokemonTeam, setPokemonTeam] = useState<Pokemon[]>(pokemonTeamFromServer);
    const { pokemonState, setPokemonState } = useContext(DataContext);

    if (message === undefined || message === "") {
        // TODO: maybe do something here? Do I need to do anything here?
    }


    // fetchPokemon gets the pokemon information 
    const fetchPokemon = async (name: string) => {
        // For names that have a space, ex. Iron Hands, we need to change it to:
        // "iron-hands"
        name = name.trim().replace(" ", "-").toLowerCase();
        const getOptions: RequestInit = {
            method: "GET",
            // LOCAL: for local development, comment out this line
            credentials: "include",
        }

        const response = await fetch(`http://localhost:3001/${name}`, getOptions);

        // This is just for local, FE-only development to hit the API:
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, getOptions);
        const data = await response.json();

        setPokemon(data);
        setPokemonState({ Pokemon: data, PokemonTeam: pokemonTeam, UserLoggedIn: "" })
    };

    const saveTeam = async (team: Pokemon[]) => {
        const configPostTeam: RequestInit = {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ team: team })
        }

        const res = await fetch("http://localhost:3001/teams", configPostTeam)
        if (res.status !== 201) {
            console.log("save did not work, got not a 201")
        }
    }

    const statsObj: { [key: string]: number } = {};
    let total = 0;
    pokemon.stats.map((stat) => {
        statsObj[stat.stat.name] = stat.base_stat;
        total += stat.base_stat;
    });

    return (
        <div className="flex flex-col p-2">
            <TopBar isLoggedIn={isLoggedIn} page={"homepage"} pokeState={pokemonState} setPokeState={setPokemonState} />
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
                            state={pokemonState}
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
                            state={pokemonState}
                            setTeam={setPokemonTeam}
                            setData={setPokemonState}
                        />
                    ))}
                </div>
            ) : (
                <></>
            )
            }
            <div>
                {isLoggedIn && pokemonTeam.length >= 1 ? (
                    <button className="border border-black rounded-md px-2" onClick={() => { saveTeam(pokemonTeam) }}>Save Team</button>
                ) : <></>}
            </div>
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
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context
    const cookie = req.cookies
    if (!cookie) {
        return {
            props: {
                message: "no cookie present",
                pokemonTeamFromServer: [],
                isLoggedIn: false,
            }
        }
    }

    const token = cookie["token"]

    if (token === undefined) {
        return {
            props: {
                message: "no token present, user is not logged in",
                pokemonTeamFromServer: [],
                isLoggedIn: false,
            }
        }
    }

    return {
        props: {
            pokemonTeamFromServer: [],
            isLoggedIn: true,
        }
    }
}

