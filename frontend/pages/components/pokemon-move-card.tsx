import { PkmnMove } from "@/lib/pkmnMoves";
import { MakeWordReadable } from "@/lib/utils";
import Image from "next/image";

export default function MoveCard({ moveInfo }: { moveInfo: PkmnMove }) {
    return (
        <div id="move-card" className="flex border border-black rounded-lg w-1/4">
            <div className="flex align-middle justify-between w-auto">
                <Image
                    src={`/${moveInfo.type.name}.svg`}
                    alt="type-icon"
                    width={25}
                    height={25}
                    className="m-[3px]"
                />
                <p className="font-bold text-xl">{MakeWordReadable(moveInfo.name)}</p>
            </div>
        </div>
    )
}
