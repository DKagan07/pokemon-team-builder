import { Pokemon } from "@/lib/pokemon";
import { BarColor, MakeWordReadable } from "@/lib/utils";
import Image from "next/image";

export default function PokemonStats({ pokemon }: { pokemon: Pokemon }) {
    if (pokemon === undefined || pokemon.name === "") {
        return <></>;
    }

    const statsObj: { [key: string]: number } = {};
    // Red: #FF7F0F 0-50
    // Yellow: #FFFB57a 50-100
    // LGreen: #A0E515 101-150
    // Green: #23CD5E 151-200
    // Blue: #00C2B8 201-255

    // Get the stat total of a pokemon and fills out object of stats
    let total = 0;
    pokemon.stats.map((stat) => {
        statsObj[stat.stat.name] = stat.base_stat;
        total += stat.base_stat;
    });

    console.log({ statsObj });

    return (
        <div
            id="pokemon-stats-card"
            className="flex flex-col items-center h-[300px] w-[465px]"
        >
            <Image
                src={pokemon.sprites.front_default}
                alt="pokemon-sprite"
                width={96}
                height={96}
            />

            <h2>{pokemon.name.toUpperCase()}</h2>
            <br />
            {Object.keys(statsObj).map((key, i) => (
                <div key={i} className="inline-flex w-full py-1">
                    <div className="justify-end w-[155px] pr-2 align-middle">
                        {MakeWordReadable(key)}: <b>{statsObj[key]}</b>
                    </div>
                    <div
                        id="progress-bar-container"
                        className="flex items-center justify-start w-[255px] h-[30px] align-middle"
                    >
                        <div
                            id="progress-bar"
                            className="h-[20px] border border-black rounded-md indent-1 text-sm"
                            style={{
                                width: statsObj[key],
                                background: BarColor(statsObj[key]),
                            }}
                        ></div>
                    </div>
                </div>
            ))}
            <b>TOTAL: {total}</b>
        </div>
    );
}
