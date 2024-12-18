import { Pokemon } from "@/lib/pokemon"

export default function PokemonTeam({ team, teamNum }: { team: Pokemon[], teamNum: number }) {
    if (team === undefined) {
        return (<></>)
    }
    return (
        <div>
            <h2 className="font-semibold size-4 p-1">No: {teamNum}</h2>
            <div className="p-2 border-slate-300 rounded-sm">
                {team.map((poke, i) => {
                    return (
                        <div key={i} className="p-2">
                            {poke.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
