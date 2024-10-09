import { MakeWordReadable } from "@/lib/utils";
import { usePokemonState } from "@/pages/context/dataContext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const { pokemonState } = usePokemonState();
    const [selectedMoves, setSelectedMoves] = useState<string[]>([]);
    const moves = pokemonState.moves;

    if (pokemonState === undefined || pokemonState.name === "") {
        return <></>;
    }

    function addMoveToSeletedMoves(val: string) {
        if (selectedMoves.length > 4) {
            console.log("cannot add more than 4 moves to a moveset");
        }
        console.log({ val });
        setSelectedMoves([...selectedMoves, val]);
    }

    function removeMoveFromMoves(val: string) {
        const newMoveSet = selectedMoves.filter((move) => move !== val);
        setSelectedMoves(newMoveSet);
    }

    return (
        <div className="m-2 p-2">
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
                onChange={(e) => {
                    e.preventDefault();
                    addMoveToSeletedMoves(e.target.value);
                }}
            >
                {moves
                    .filter((move) => !selectedMoves.includes(move.move.name))
                    .map((move, i) => (
                        <option key={i} value={move.move.name}>
                            {MakeWordReadable(move.move.name)}
                        </option>
                    ))}
            </select>
            <br />
            <br />
            <br />
            <div>
                {selectedMoves.map((move, i) => {
                    return (
                        <div key={i} className="flex">
                            {/* Eventually have a move card here*/}
                            <h4 className="font-bold size-4 h-auto w-auto">
                                {MakeWordReadable(move)}
                            </h4>

                            {/* This button would be included in the move card */}
                            <button
                                onClick={() => {
                                    removeMoveFromMoves(move);
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
                    );
                })}
            </div>
        </div>
    );
}
