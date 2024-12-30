import { InitialPokeSetter, Pokemon } from "@/lib/pokemon";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

export type State = {
    Pokemon: Pokemon;
    PokemonTeam: Pokemon[];
    UserLoggedIn: string;
}

interface DataContextType {
    pokemonState: State;
    setPokemonState: Dispatch<SetStateAction<State>>;
}

const DataContext = createContext<DataContextType>({
    pokemonState: { Pokemon: InitialPokeSetter, PokemonTeam: [], UserLoggedIn: "" },
    setPokemonState: () => { }
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [pokemonState, setPokemonState] = useState<State>({ Pokemon: InitialPokeSetter, PokemonTeam: [], UserLoggedIn: "" });

    return (
        <DataContext.Provider value={{ pokemonState, setPokemonState }}>
            {children}
        </DataContext.Provider>
    );
};


export { DataContext }
export default DataProvider;
