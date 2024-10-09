import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DataProvider from "./context/dataContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    );
}
