import { InitialPokeSetter, Pokemon } from "@/lib/pokemon";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface DataContextType {
    pokemonState: Pokemon;
    setPokemonState: Dispatch<SetStateAction<Pokemon>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [pokemonState, setPokemonState] = useState<Pokemon>(InitialPokeSetter);

    return (
        <DataContext.Provider value={{ pokemonState, setPokemonState }}>
            {children}
        </DataContext.Provider>
    );
};

export const usePokemonState = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within the DataProvider");
    }

    return context;
};

export default DataProvider;
