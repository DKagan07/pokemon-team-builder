import Link from "next/link"
import { State } from "../context/dataContext"
import { Dispatch, SetStateAction } from "react"
// import { Pokemon } from "@/lib/pokemon"

export default function TopBar({
    isLoggedIn,
    page,
    pokeState,
    setPokeState,
}: {
    isLoggedIn: boolean,
    page: string,
    pokeState: State,
    setPokeState: Dispatch<SetStateAction<State>>,
}) {

    const logoutUser = async () => {
        console.log("attempting to log out user")

        const postOptions: RequestInit = {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "UserLoggedIn": pokeState.UserLoggedIn })
        }

        try {
            const response = await fetch("http://localhost:3001/users/logout", postOptions)
            if (response.status >= 200 && response.status <= 299) {
                setPokeState({ Pokemon: pokeState.Pokemon, PokemonTeam: pokeState.PokemonTeam, UserLoggedIn: "" })
            }
        } catch (e) {
            console.log("error: ", e)
        }

    }

    // TODO: need some conditional to see if someone is logged in
    // for now, we'll just have a login button
    // Also, the teams button is there for testing an authenticated endpoint
    // remove when needed
    return (
        <div className="flex justify-between w-full p-2">
            <div className="flex">
                <div className="px-2 justify-start">
                    <Link href="/">
                        <button className="border border-black rounded-md px-2">
                            Home
                        </button>
                    </Link>
                </div>
                {
                    isLoggedIn && page !== "teams" ? (
                        <div className="flex px-2">
                            <Link href="/teams">
                                <button className="border border-black rounded-md px-2">
                                    Teams
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div className="flex flex-nowrap justify-end">
                {isLoggedIn && pokeState.UserLoggedIn !== "" ? (
                    <div className="flex justify-end w-full">
                        <h3 className="px-3">Hello {pokeState.UserLoggedIn}</h3>
                        <button className="border border-black rounded-md px-2" onClick={() => logoutUser()}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-nowrap px-2">
                            {// TODO: Apparently I need to have this specifically be 73px so the words "Sign Up" are on 1 line
                                // I'm sure there's a better way to do this, but kinda tired of searching. Should fix this
                            }
                            <Link href="/signup" className="w-[73px]">
                                <button className="inline-block border border-black rounded-md px-2">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                        <div className="flex justify-end w-full px-2">
                            <Link href="/login">
                                <button className="border border-black rounded-md px-2">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}
