import { Pokemon } from "@/lib/pokemon"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import TopBar from "../components/topbar"
import PokemonTeam from "../components/pokemon-team"

interface TeamProps {
    message?: string
    pokemonTeamsFromServer: Pokemon[][]
}

export default function Home(props: TeamProps) {
    const { message, pokemonTeamsFromServer } = props

    // Clean pokemonTeamsFromServer
    //
    // For some reason, the first item is always "null", not sure why, but
    // cleaning that up is fairly easy. This is in a loop just to cover edge
    // cases where it's not just the first element
    for (let i = 0; i < pokemonTeamsFromServer.length; i++) {
        if (pokemonTeamsFromServer[i] === null || pokemonTeamsFromServer[i] === undefined) {
            pokemonTeamsFromServer.splice(i, 1)
        }
    }

    console.log({ message })
    console.log({ pokemonTeamsFromServer })


    return (
        <div className="flex flex-col p-2">
            <TopBar isLoggedIn={true} page={"teams"} />
            <div className="p-2">
                <h2>Teams page</h2>
                {pokemonTeamsFromServer.map((team, i) => {
                    return (
                        <PokemonTeam key={i} team={team} teamNum={i + 1} />
                    )
                })}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context
    const cookie = req.cookies
    if (!cookie) {
        return {
            props: {
                message: "no cookie present",
                pokemonTeamFromServer: [],
            }
        }
    }

    const token = cookie["token"]

    if (token === undefined) {
        return {
            props: {
                message: "no token present, user is not logged in",
                pokemonTeamsFromServer: [],
            }
        }
    }

    const getOptions: RequestInit = {
        method: "GET",
        credentials: "include",
        headers: {
            "Cookie": `token=${token}`
        }
    }

    const response = await fetch("http://backend:3001/teams/", getOptions)
    const data = await response.json() //as Pokemon[][]

    if (data.length === 0) {
        return {
            props: {
                message: "No teams found",
                pokemonTeamsFromServer: [],
            }
        }
    }

    return {
        props: {
            pokemonTeamsFromServer: data,
        }
    }
}
