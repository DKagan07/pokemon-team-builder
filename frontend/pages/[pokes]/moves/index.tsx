import { PkmnMove, /*TestMove */ } from "@/lib/pkmnMoves";
import { MakeWordReadable } from "@/lib/utils";
import MoveCard from "@/pages/components/pokemon-move-card";
import { DataContext } from "@/pages/context/dataContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Home() {
    const { pokemonState } = useContext(DataContext);

    const [selectedMoves, setSelectedMoves] = useState<PkmnMove[]>([]);
    const [selectedMoveNames, setSelectedMoveNames] = useState<string[]>([])
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [moveList, setMoveList] = useState<string[]>(pokemonState.Pokemon.moves.map((move) => move.move.name))

    useEffect(() => {
        if (selectedMoves.length < 4) {
            setErrorMessage("")
        }
    }, [selectedMoves])

    if (pokemonState === undefined || pokemonState.Pokemon.name === "") {
        return <></>;
    }

    function removeMoveFromMoves(val: PkmnMove) {
        // Add the move to the moveList
        const newMoveSet = selectedMoves.filter((move) => move.name !== val.name);
        setSelectedMoves(newMoveSet);
        setMoveList([val.name, ...moveList])
    }

    async function fetchMoveInfo(moveName: string) {
        // We need to string parse here for moves with a space in them. Ex. We
        // want to change Aerial Ace to aerial-ace to hit the right endpoint
        moveName = moveName.trim().replace(" ", "-").toLowerCase();

        const getOptions: RequestInit = {
            method: "GET",
            // LOCAL: for local development, comment out this line
            credentials: "include",
        }
        const response = await fetch(`http://localhost:3001/move/${moveName}`, getOptions);

        // This is just for local, FE-only development:
        // const response = await fetch(`https://pokeapi.co/api/v2/move/${moveName}/`, getOptions);

        const data = await response.json() as PkmnMove;

        if (selectedMoves.length < 4) {
            setErrorMessage("")
            setSelectedMoves([...selectedMoves, data]);
            setSelectedMoveNames([...selectedMoveNames, data.name])
        } else {
            setErrorMessage("You can only select 4 moves")
        }

    }

    return (
        <div className="m-2 p-2">
            <div id="go-back" className="flex flex-col p-1">
                <Link href="/">
                    <div className="flex">
                        <Image
                            src={"/back-arrow.svg"}
                            alt="back-button"
                            height={20}
                            width={20}
                            className="pr-1"
                        />
                        <b>Back</b>
                    </div>
                </Link>
            </div>
            <div className="w-[100px] h-[100px] mx-3">
                <Image
                    src={pokemonState.Pokemon.sprites.front_default}
                    alt="pokemon-sprite"
                    width={100}
                    height={100}
                    className="mx-[5px]"
                />
            </div>
            <h1 className="py-2">
                Pick {MakeWordReadable(pokemonState.Pokemon.name)} Moveset:
            </h1>
            <select
                onChange={async (e) => {
                    e.preventDefault();
                    await fetchMoveInfo(e.target.value)
                }}
            >
                {moveList
                    .filter((move) => !selectedMoveNames.includes(move))
                    .sort((a, b) => a.localeCompare(b))
                    .map((move, i) => (
                        <option key={i} value={move}>
                            {MakeWordReadable(move)}
                        </option>
                    ))
                }
            </select>
            <br />
            <br />
            <br />
            {errorMessage && <div className="text-red-500 text-center pb-4 text-xl">{errorMessage}</div>}
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {selectedMoves.map((move, i) => {
                    return (
                        <div key={i} className="flex align-center justify-center w-full">
                            <MoveCard moveInfo={move} removeFromMoves={removeMoveFromMoves} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
