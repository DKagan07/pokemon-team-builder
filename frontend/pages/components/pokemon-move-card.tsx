import { FlavorTextEntry, PkmnMove } from "@/lib/pkmnMoves";
import { BgColorForMoves, MakeWordReadable } from "@/lib/utils";
import Image from "next/image";

export default function MoveCard({ moveInfo, removeFromMoves }: { moveInfo: PkmnMove, removeFromMoves: (val: PkmnMove) => void }) {
    if (moveInfo === undefined || moveInfo.name === "") {
        return <></>
    }

    // getLatestMoveFlavorText goes through the array of flavor texts for moves
    // and finds the one last in the array. This works because the array is
    // sorted by generation, the newer generations are last in the array
    function getLatestMoveFlavorText(texts: FlavorTextEntry[]): string {
        let latestEngEntry = ""
        let latestEntry = 0
        for (let i = 0; i < texts.length; i++) {
            if (texts[i].language.name === "en" && i > latestEntry) {
                latestEngEntry = texts[i].flavor_text
            } else {
                latestEntry = i
            }
        }
        return latestEngEntry
    }

    const hexColor = BgColorForMoves[moveInfo.type.name]

    // For some reason, the bg-[#customHexColor] isn't working with TW, so 
    // manually doing it with the style property is the best way to do it
    return (
        < div id="move-card" className="flex border border-black rounded-lg w-[75%] justify-center"
            style={{ backgroundColor: hexColor + "32" }} >
            <div className="flex-col m-2">
                <div className="flex">
                    <div className="grid grid-rows-1 grid-cols-4 justify-center w-full">
                        <div id="move-col-1" className="col-span-1" ></div>
                        <div id="move-col-2" className="flex col-span-2 justify-center">
                            <Image
                                src={`/${moveInfo.type.name}.svg`}
                                alt="type-icon"
                                width={15}
                                height={15}
                                className="m-[3px]"
                            />
                            <p className="font-bold text-xl">{MakeWordReadable(moveInfo.name)}</p>
                        </div>
                        <div id="move-col-3" className="flex justify-end col-span-1">
                            <button
                                onClick={() => {
                                    removeFromMoves(moveInfo);
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
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">
                            Accuracy: {moveInfo.accuracy === null ? "--" : moveInfo.accuracy}
                        </div>
                        <div className="font-semibold">
                            Power: {moveInfo.power === null ? "--" : moveInfo.power}
                        </div>
                        <div className="font-semibold">
                            PP: {moveInfo.pp}
                        </div>
                        <div className="font-semibold">
                            Damage: {moveInfo.damage_class.name}
                        </div>
                    </div>
                </div>
                <div className="flex text-center pt-2">
                    <p>{getLatestMoveFlavorText(moveInfo.flavor_text_entries)}</p>
                </div>
            </div>
        </div >
    )
}
