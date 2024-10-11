import { PkmnMove, /*TestMove */ } from "@/lib/pkmnMoves";
import { MakeWordReadable } from "@/lib/utils";
import MoveCard from "@/pages/components/pokemon-move-card";
import { usePokemonState } from "@/pages/context/dataContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const { pokemonState } = usePokemonState();

    // NOTE: This is just to test without hitting the API
    // const [selectedMoves, setSelectedMoves] = useState<PkmnMove[]>([TestMove]);

    const [selectedMoves, setSelectedMoves] = useState<PkmnMove[]>([]);
    const [selectedMoveNames, setSelectedMoveNames] = useState<string[]>([])
    const moves = pokemonState.moves;

    useEffect(() => {
        console.log({ selectedMoves })
    }, [selectedMoves])

    if (pokemonState === undefined || pokemonState.name === "") {
        return <></>;
    }

    function removeMoveFromMoves(val: PkmnMove) {
        const newMoveSet = selectedMoves.filter((move) => move.name !== val.name);
        setSelectedMoves(newMoveSet);
    }

    async function fetchMoveInfo(moveName: string) {
        // We need to string parse here for moves with a space in them. Ex. We
        // want to change Aerial Ace to aerial-ace to hit the right endpoint
        moveName = moveName.trim().replace(" ", "-").toLowerCase();
        const response = await fetch(`http://localhost:3001/move/${moveName}`);

        // This is just for local, FE-only development:
        // const response = await fetch(`https://pokeapi.co/api/v2/move/${moveName}/`);

        const data = await response.json() as PkmnMove;
        setSelectedMoves([...selectedMoves, data]);
        setSelectedMoveNames([...selectedMoveNames, data.name])
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
                    src={pokemonState.sprites.front_default}
                    alt="pokemon-sprite"
                    width={100}
                    height={100}
                    className="mx-[5px]"
                />
            </div>
            <h1 className="py-2">
                Pick {MakeWordReadable(pokemonState.name)} Moveset:
            </h1>
            <select
                onChange={async (e) => {
                    e.preventDefault();
                    await fetchMoveInfo(e.target.value)
                }}
            >
                {moves
                    .filter((move) => !selectedMoveNames.includes(move.move.name))
                    .sort((a, b) => a.move.name.localeCompare(b.move.name))
                    .map((move, i) => (
                        <option key={i} value={move.move.name}>
                            {MakeWordReadable(move.move.name)}
                        </option>
                    ))
                }
            </select>
            <br />
            <br />
            <br />
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
