import localFont from "next/font/local";
import { Pokemon } from "@/lib/pokemon";
import { BarColor, MakeWordReadable } from "@/lib/utils";
import Image from "next/image";

// MAX_VALUE is the max value of a single base stat
const MAX_VALUE = 255;

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export default function PokemonStats({
    pokemon,
    statsObj,
}: {
    pokemon: Pokemon;
    statsObj: { [key: string]: number };
}) {
    if (pokemon === undefined || pokemon.name === "") {
        return <></>;
    }

    return (
        <div
            id="pokemon-stats-card"
            className="flex flex-col m-3 items-center h-auto w-[365px] border border-black rounded-lg"
        >
            <div className="flex justify-evenly pt-4">
                <Image
                    src={pokemon.sprites.front_default}
                    alt="pokemon-sprite"
                    width={100}
                    height={100}
                    className="pr-2 space-x-[30px]"
                />
                <div className="flex-col">
                    {pokemon.types.map((type, i) => (
                        <div key={i} className="flex pt-3">
                            <Image
                                src={`/${type.type.name}.svg`}
                                alt="type icon"
                                height={25}
                                width={25}
                                className="pr-1"
                            />
                            <p>{MakeWordReadable(type.type.name)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className={`${geistSans.className} bold`}>
                {pokemon.name.toUpperCase()}
            </h2>
            <div className="pt-2">
                {Object.keys(statsObj).map((key, i) => (
                    <div key={i} className="inline-flex w-full py-1">
                        <div className="flex justify-end w-[155px] pr-2 align-middle">
                            <p className="align-middle pr-1">
                                {MakeWordReadable(key)}:{"  "}
                            </p>
                            <b className="align-middle">{statsObj[key]}</b>
                        </div>
                        <div
                            id="progress-bar-container"
                            className="flex items-center justify-start w-[200px] h-[30px] align-middle"
                        >
                            <div
                                id="progress-bar"
                                className="h-[20px] border border-black rounded-md indent-1 text-sm"
                                style={{
                                    width: `${(statsObj[key] / MAX_VALUE) * 100}%`,
                                    background: BarColor(statsObj[key]),
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
