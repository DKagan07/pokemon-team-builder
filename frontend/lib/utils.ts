function capitalizeWord(w: string): string {
    const firstLetter = w[0];
    const restOfWord = w.slice(1);
    return firstLetter.toUpperCase() + restOfWord;
}

export function MakeWordReadable(w: string): string {
    const words = w.split("-");

    let result = "";
    for (const wo in words) {
        result += capitalizeWord(words[wo]) + " ";
    }

    return result.trim();
}

// Red: #FF7F0F 0-50
// Yellow: #FFFB57a 50-100
// LGreen: #A0E515 101-150
// Green: #23CD5E 151-200
// Blue: #00C2B8 201-255
export function BarColor(val: number): string {
    switch (true) {
        case val <= 50: {
            return "#FF7F0F";
        }
        case val > 50 && val < 100: {
            return "#FFFB57";
        }
        case val >= 100 && val <= 150: {
            return "#A0E515";
        }
        case val > 150 && val <= 200: {
            return "#23CD5E";
        }
        default: {
            return "#00C2B8";
        }
    }
}

export const BgColorForMoves: { [key: string]: string } = {
    bug: "#92bd2d",
    dark: "#595761",
    dragon: "#0c6ac8",
    electric: "#f2d94e",
    fairy: "#ef90e6",
    fighting: "#d3425f",
    fire: "#fba64c",
    flying: "#a1bbec",
    ghost: "#5f6dbc",
    grass: "#60bd58",
    ground: "#da7c4d",
    ice: "#76d1c1",
    normal: "#a0a29f",
    poison: "#b763cf",
    psychic: "#fa8582",
    rock: "#c9bc8a",
    steel: "#5795a3",
    water: "#539ddf",
}
