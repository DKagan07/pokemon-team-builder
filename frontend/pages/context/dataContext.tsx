import { InitialPokeSetter, Pokemon } from "@/lib/pokemon";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

export type PokemonState = {
    Pokemon: Pokemon;
    PokemonTeam: Pokemon[];
}

interface DataContextType {
    pokemonState: PokemonState;
    setPokemonState: Dispatch<SetStateAction<PokemonState>>;
}

const DataContext = createContext<DataContextType>({
    pokemonState: { Pokemon: InitialPokeSetter, PokemonTeam: [] },
    setPokemonState: () => { }
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [pokemonState, setPokemonState] = useState<PokemonState>({ Pokemon: InitialPokeSetter, PokemonTeam: [] });

    return (
        <DataContext.Provider value={{ pokemonState, setPokemonState }}>
            {children}
        </DataContext.Provider>
    );
};


export { DataContext }
export default DataProvider;
