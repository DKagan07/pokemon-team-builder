export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: Index[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Moves[];
    species: Species;
    sprites: Sprites;
    cries: Cries;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
}

export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: Ability2;
}

export interface Ability2 {
    name: string;
    url: string;
}

export interface Form {
    name: string;
    url: string;
}

export interface Index {
    game_index: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}

export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

export interface Item {
    name: string;
    url: string;
}

export interface VersionDetail {
    rarity: number;
    version: Version2;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface Moves {
    move: Move;
    version_group_details: VersionGroupDetail[];
}

export interface Move {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    version_group: VersionGroup;
    move_learn_method: MoveLearnMethod;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: Other;
    versions: Versions;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
    showdown: Showdown;
}

export interface DreamWorld {
    front_default: string;
    front_female: string | null;
}

export interface Home {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

export interface Showdown {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationII;
    "generation-iii": GenerationIII;
    "generation-iv": GenerationIV;
    "generation-v": GenerationV;
    "generation-vi": GenerationVI;
    "generation-vii": GenerationVII;
    "generation-viii": GenerationVIII;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

export interface Yellow {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
}

export interface GenerationII {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIII {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
}

export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIV {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartgoldSoulsilver;
    platinum: Platinum;
}

export interface DiamondPearl {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface Platinum {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationV {
    "black-white": BlackWhite;
}

export interface BlackWhite {
    animated: Animated;
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface Animated {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationVI {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire;
    "x-y": XY;
}

export interface OmegarubyAlphasapphire {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface XY {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationVII {
    icons: Icons;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons {
    front_default: string;
    front_female: string | null;
}

export interface UltraSunUltraMoon {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
}

export interface GenerationVIII {
    icons: Icons2;
}

export interface Icons2 {
    front_default: string;
    front_female: string | null;
}

export interface Cries {
    latest: string;
    legacy: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface PastType {
    generation: Generation;
    types: Type3[];
}

export interface Generation {
    name: string;
    url: string;
}

export interface Type3 {
    slot: number;
    type: Type4;
}

export interface Type4 {
    name: string;
    url: string;
}

export const InitialPokeSetter: Pokemon = {
    id: 0,
    name: "",
    base_experience: 0,
    height: 0,
    is_default: true,
    order: 0,
    weight: 0,
    abilities: [],
    forms: [],
    game_indices: [],
    held_items: [],
    location_area_encounters: "/api/v2/pokemon/35/encounters",
    moves: [],
    species: {
        name: "",
        url: "",
    },
    sprites: {
        back_default: "",
        back_female: null,
        back_shiny: "",
        back_shiny_female: null,
        front_default: "",
        front_female: null,
        front_shiny: "",
        front_shiny_female: null,
        other: {
            dream_world: {
                front_default: "",
                front_female: null,
            },
            home: {
                front_default: "",
                front_female: null,
                front_shiny: "",
                front_shiny_female: null,
            },
            "official-artwork": {
                front_default: "",
                front_shiny: "",
            },
            showdown: {
                back_default: "",
                back_female: null,
                back_shiny: "",
                back_shiny_female: null,
                front_default: "",
                front_female: null,
                front_shiny: "",
                front_shiny_female: null,
            },
        },
        versions: {
            "generation-i": {
                "red-blue": {
                    back_default: "",
                    back_gray: "",
                    front_default: "",
                    front_gray: "",
                },
                yellow: {
                    back_default: "",
                    back_gray: "",
                    front_default: "",
                    front_gray: "",
                },
            },
            "generation-ii": {
                crystal: {
                    back_default: "",
                    back_shiny: "",
                    front_default: "",
                    front_shiny: "",
                },
                gold: {
                    back_default: "",
                    back_shiny: "",
                    front_default: "",
                    front_shiny: "",
                },
                silver: {
                    back_default: "",
                    back_shiny: "",
                    front_default: "",
                    front_shiny: "",
                },
            },
            "generation-iii": {
                emerald: {
                    front_default: "",
                    front_shiny: "",
                },
                "firered-leafgreen": {
                    back_default: "",
                    back_shiny: "",
                    front_default: "",
                    front_shiny: "",
                },
                "ruby-sapphire": {
                    back_default: "",
                    back_shiny: "",
                    front_default: "",
                    front_shiny: "",
                },
            },
            "generation-iv": {
                "diamond-pearl": {
                    back_default: "",
                    back_female: null,
                    back_shiny: "",
                    back_shiny_female: null,
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
                "heartgold-soulsilver": {
                    back_default: "",
                    back_female: null,
                    back_shiny: "",
                    back_shiny_female: null,
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
                platinum: {
                    back_default: "",
                    back_female: null,
                    back_shiny: "",
                    back_shiny_female: null,
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
            },
            "generation-v": {
                "black-white": {
                    animated: {
                        back_default: "",
                        back_female: null,
                        back_shiny: "",
                        back_shiny_female: null,
                        front_default: "",
                        front_female: null,
                        front_shiny: "",
                        front_shiny_female: null,
                    },
                    back_default: "",
                    back_female: null,
                    back_shiny: "",
                    back_shiny_female: null,
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
                "x-y": {
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
            },
            "generation-vii": {
                icons: {
                    front_default: "",
                    front_female: null,
                },
                "ultra-sun-ultra-moon": {
                    front_default: "",
                    front_female: null,
                    front_shiny: "",
                    front_shiny_female: null,
                },
            },
            "generation-viii": {
                icons: {
                    front_default: "",
                    front_female: null,
                },
            },
        },
    },
    cries: {
        latest: "",
        legacy: "",
    },
    stats: [],
    types: [],
    past_types: [
        {
            generation: {
                name: "",
                url: "",
            },
            types: [
                {
                    slot: 1,
                    type: {
                        name: "",
                        url: "",
                    },
                },
            ],
        },
    ],
};

// export const TestPkmn: Pokemon = {
//     abilities: [
//         {
//             ability: {
//                 name: "merciless",
//                 url: "https://pokeapi.co/api/v2/ability/196/",
//             },
//             is_hidden: false,
//             slot: 1,
//         },
//         {
//             ability: {
//                 name: "limber",
//                 url: "https://pokeapi.co/api/v2/ability/7/",
//             },
//             is_hidden: false,
//             slot: 2,
//         },
//         {
//             ability: {
//                 name: "regenerator",
//                 url: "https://pokeapi.co/api/v2/ability/144/",
//             },
//             is_hidden: true,
//             slot: 3,
//         },
//     ],
//     base_experience: 173,
//     cries: {
//         latest:
//             "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/748.ogg",
//         legacy: null,
//     },
//     forms: [
//         {
//             name: "toxapex",
//             url: "https://pokeapi.co/api/v2/pokemon-form/748/",
//         },
//     ],
//     game_indices: [],
//     height: 7,
//     held_items: [
//         {
//             item: {
//                 name: "poison-barb",
//                 url: "https://pokeapi.co/api/v2/item/222/",
//             },
//             version_details: [
//                 {
//                     rarity: 5,
//                     version: {
//                         name: "sun",
//                         url: "https://pokeapi.co/api/v2/version/27/",
//                     },
//                 },
//                 {
//                     rarity: 5,
//                     version: {
//                         name: "moon",
//                         url: "https://pokeapi.co/api/v2/version/28/",
//                     },
//                 },
//                 {
//                     rarity: 5,
//                     version: {
//                         name: "ultra-sun",
//                         url: "https://pokeapi.co/api/v2/version/29/",
//                     },
//                 },
//                 {
//                     rarity: 5,
//                     version: {
//                         name: "ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version/30/",
//                     },
//                 },
//             ],
//         },
//     ],
//     id: 748,
//     is_default: true,
//     location_area_encounters: "https://pokeapi.co/api/v2/pokemon/748/encounters",
//     moves: [
//         {
//             move: {
//                 name: "body-slam",
//                 url: "https://pokeapi.co/api/v2/move/34/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "poison-sting",
//                 url: "https://pokeapi.co/api/v2/move/40/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "pin-missile",
//                 url: "https://pokeapi.co/api/v2/move/42/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 51,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 51,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 25,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 25,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "bite",
//                 url: "https://pokeapi.co/api/v2/move/44/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 9,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 9,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "hydro-pump",
//                 url: "https://pokeapi.co/api/v2/move/56/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "surf",
//                 url: "https://pokeapi.co/api/v2/move/57/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "ice-beam",
//                 url: "https://pokeapi.co/api/v2/move/58/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "blizzard",
//                 url: "https://pokeapi.co/api/v2/move/59/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "hyper-beam",
//                 url: "https://pokeapi.co/api/v2/move/63/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "peck",
//                 url: "https://pokeapi.co/api/v2/move/64/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 5,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 5,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "toxic",
//                 url: "https://pokeapi.co/api/v2/move/92/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 21,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 21,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 56,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 56,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "double-team",
//                 url: "https://pokeapi.co/api/v2/move/104/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "recover",
//                 url: "https://pokeapi.co/api/v2/move/105/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 33,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 33,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 20,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 20,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "light-screen",
//                 url: "https://pokeapi.co/api/v2/move/113/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "haze",
//                 url: "https://pokeapi.co/api/v2/move/114/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "spike-cannon",
//                 url: "https://pokeapi.co/api/v2/move/131/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 29,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 29,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "rest",
//                 url: "https://pokeapi.co/api/v2/move/156/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "substitute",
//                 url: "https://pokeapi.co/api/v2/move/164/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "snore",
//                 url: "https://pokeapi.co/api/v2/move/173/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "spite",
//                 url: "https://pokeapi.co/api/v2/move/180/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "protect",
//                 url: "https://pokeapi.co/api/v2/move/182/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "scary-face",
//                 url: "https://pokeapi.co/api/v2/move/184/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "sludge-bomb",
//                 url: "https://pokeapi.co/api/v2/move/188/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "icy-wind",
//                 url: "https://pokeapi.co/api/v2/move/196/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "endure",
//                 url: "https://pokeapi.co/api/v2/move/203/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "swagger",
//                 url: "https://pokeapi.co/api/v2/move/207/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "attract",
//                 url: "https://pokeapi.co/api/v2/move/213/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "sleep-talk",
//                 url: "https://pokeapi.co/api/v2/move/214/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "return",
//                 url: "https://pokeapi.co/api/v2/move/216/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "frustration",
//                 url: "https://pokeapi.co/api/v2/move/218/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "safeguard",
//                 url: "https://pokeapi.co/api/v2/move/219/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "pain-split",
//                 url: "https://pokeapi.co/api/v2/move/220/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "hidden-power",
//                 url: "https://pokeapi.co/api/v2/move/237/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "rain-dance",
//                 url: "https://pokeapi.co/api/v2/move/240/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "hail",
//                 url: "https://pokeapi.co/api/v2/move/258/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "facade",
//                 url: "https://pokeapi.co/api/v2/move/263/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "magic-coat",
//                 url: "https://pokeapi.co/api/v2/move/277/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "knock-off",
//                 url: "https://pokeapi.co/api/v2/move/282/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "snatch",
//                 url: "https://pokeapi.co/api/v2/move/289/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "muddy-water",
//                 url: "https://pokeapi.co/api/v2/move/330/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "iron-defense",
//                 url: "https://pokeapi.co/api/v2/move/334/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "block",
//                 url: "https://pokeapi.co/api/v2/move/335/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "mud-shot",
//                 url: "https://pokeapi.co/api/v2/move/341/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "covet",
//                 url: "https://pokeapi.co/api/v2/move/343/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "water-pulse",
//                 url: "https://pokeapi.co/api/v2/move/352/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "brine",
//                 url: "https://pokeapi.co/api/v2/move/362/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "payback",
//                 url: "https://pokeapi.co/api/v2/move/371/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "gastro-acid",
//                 url: "https://pokeapi.co/api/v2/move/380/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "toxic-spikes",
//                 url: "https://pokeapi.co/api/v2/move/390/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 13,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 13,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 30,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 30,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "poison-jab",
//                 url: "https://pokeapi.co/api/v2/move/398/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 37,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 37,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 49,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 49,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "giga-impact",
//                 url: "https://pokeapi.co/api/v2/move/416/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "cross-poison",
//                 url: "https://pokeapi.co/api/v2/move/440/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "gunk-shot",
//                 url: "https://pokeapi.co/api/v2/move/441/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "wide-guard",
//                 url: "https://pokeapi.co/api/v2/move/469/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 17,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 17,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "venoshock",
//                 url: "https://pokeapi.co/api/v2/move/474/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 25,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 25,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 15,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 15,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "smack-down",
//                 url: "https://pokeapi.co/api/v2/move/479/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "sludge-wave",
//                 url: "https://pokeapi.co/api/v2/move/482/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "acid-spray",
//                 url: "https://pokeapi.co/api/v2/move/491/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 42,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "after-you",
//                 url: "https://pokeapi.co/api/v2/move/495/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "round",
//                 url: "https://pokeapi.co/api/v2/move/496/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "scald",
//                 url: "https://pokeapi.co/api/v2/move/503/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "hex",
//                 url: "https://pokeapi.co/api/v2/move/506/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "frost-breath",
//                 url: "https://pokeapi.co/api/v2/move/524/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "confide",
//                 url: "https://pokeapi.co/api/v2/move/590/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "venom-drench",
//                 url: "https://pokeapi.co/api/v2/move/599/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 44,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 44,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 42,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "infestation",
//                 url: "https://pokeapi.co/api/v2/move/611/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "baneful-bunker",
//                 url: "https://pokeapi.co/api/v2/move/661/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 1,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "lunge",
//                 url: "https://pokeapi.co/api/v2/move/679/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "liquidation",
//                 url: "https://pokeapi.co/api/v2/move/710/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 58,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sun-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/17/",
//                     },
//                 },
//                 {
//                     level_learned_at: 58,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "tutor",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/3/",
//                     },
//                     version_group: {
//                         name: "ultra-sun-ultra-moon",
//                         url: "https://pokeapi.co/api/v2/version-group/18/",
//                     },
//                 },
//                 {
//                     level_learned_at: 35,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "sword-shield",
//                         url: "https://pokeapi.co/api/v2/version-group/20/",
//                     },
//                 },
//                 {
//                     level_learned_at: 35,
//                     move_learn_method: {
//                         name: "level-up",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/1/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "tera-blast",
//                 url: "https://pokeapi.co/api/v2/move/851/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "ice-spinner",
//                 url: "https://pokeapi.co/api/v2/move/861/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "pounce",
//                 url: "https://pokeapi.co/api/v2/move/884/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//         {
//             move: {
//                 name: "chilling-water",
//                 url: "https://pokeapi.co/api/v2/move/886/",
//             },
//             version_group_details: [
//                 {
//                     level_learned_at: 0,
//                     move_learn_method: {
//                         name: "machine",
//                         url: "https://pokeapi.co/api/v2/move-learn-method/4/",
//                     },
//                     version_group: {
//                         name: "scarlet-violet",
//                         url: "https://pokeapi.co/api/v2/version-group/25/",
//                     },
//                 },
//             ],
//         },
//     ],
//     name: "toxapex",
//     order: 904,
//     past_abilities: [],
//     past_types: [],
//     species: {
//         name: "toxapex",
//         url: "https://pokeapi.co/api/v2/pokemon-species/748/",
//     },
//     sprites: {
//         back_default:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/748.png",
//         back_female: null,
//         back_shiny:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/748.png",
//         back_shiny_female: null,
//         front_default:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
//         front_female: null,
//         front_shiny:
//             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/748.png",
//         front_shiny_female: null,
//         other: {
//             dream_world: {
//                 front_default: null,
//                 front_female: null,
//             },
//             home: {
//                 front_default:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png",
//                 front_female: null,
//                 front_shiny:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/748.png",
//                 front_shiny_female: null,
//             },
//             "official-artwork": {
//                 front_default:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
//                 front_shiny:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/748.png",
//             },
//             showdown: {
//                 back_default:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/748.gif",
//                 back_female: null,
//                 back_shiny:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/748.gif",
//                 back_shiny_female: null,
//                 front_default:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/748.gif",
//                 front_female: null,
//                 front_shiny:
//                     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/748.gif",
//                 front_shiny_female: null,
//             },
//         },
//         versions: {
//             "generation-i": {
//                 "red-blue": {
//                     back_default: null,
//                     back_gray: null,
//                     back_transparent: null,
//                     front_default: null,
//                     front_gray: null,
//                     front_transparent: null,
//                 },
//                 yellow: {
//                     back_default: null,
//                     back_gray: null,
//                     back_transparent: null,
//                     front_default: null,
//                     front_gray: null,
//                     front_transparent: null,
//                 },
//             },
//             "generation-ii": {
//                 crystal: {
//                     back_default: null,
//                     back_shiny: null,
//                     back_shiny_transparent: null,
//                     back_transparent: null,
//                     front_default: null,
//                     front_shiny: null,
//                     front_shiny_transparent: null,
//                     front_transparent: null,
//                 },
//                 gold: {
//                     back_default: null,
//                     back_shiny: null,
//                     front_default: null,
//                     front_shiny: null,
//                     front_transparent: null,
//                 },
//                 silver: {
//                     back_default: null,
//                     back_shiny: null,
//                     front_default: null,
//                     front_shiny: null,
//                     front_transparent: null,
//                 },
//             },
//             "generation-iii": {
//                 emerald: {
//                     front_default: null,
//                     front_shiny: null,
//                 },
//                 "firered-leafgreen": {
//                     back_default: null,
//                     back_shiny: null,
//                     front_default: null,
//                     front_shiny: null,
//                 },
//                 "ruby-sapphire": {
//                     back_default: null,
//                     back_shiny: null,
//                     front_default: null,
//                     front_shiny: null,
//                 },
//             },
//             "generation-iv": {
//                 "diamond-pearl": {
//                     back_default: null,
//                     back_female: null,
//                     back_shiny: null,
//                     back_shiny_female: null,
//                     front_default: null,
//                     front_female: null,
//                     front_shiny: null,
//                     front_shiny_female: null,
//                 },
//                 "heartgold-soulsilver": {
//                     back_default: null,
//                     back_female: null,
//                     back_shiny: null,
//                     back_shiny_female: null,
//                     front_default: null,
//                     front_female: null,
//                     front_shiny: null,
//                     front_shiny_female: null,
//                 },
//                 platinum: {
//                     back_default: null,
//                     back_female: null,
//                     back_shiny: null,
//                     back_shiny_female: null,
//                     front_default: null,
//                     front_female: null,
//                     front_shiny: null,
//                     front_shiny_female: null,
//                 },
//             },
//             "generation-v": {
//                 "black-white": {
//                     animated: {
//                         back_default: null,
//                         back_female: null,
//                         back_shiny: null,
//                         back_shiny_female: null,
//                         front_default: null,
//                         front_female: null,
//                         front_shiny: null,
//                         front_shiny_female: null,
//                     },
//                     back_default:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/748.png",
//                     back_female: null,
//                     back_shiny:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/748.png",
//                     back_shiny_female: null,
//                     front_default:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/748.png",
//                     front_female: null,
//                     front_shiny:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/748.png",
//                     front_shiny_female: null,
//                 },
//             },
//             "generation-vi": {
//                 "omegaruby-alphasapphire": {
//                     front_default: null,
//                     front_female: null,
//                     front_shiny: null,
//                     front_shiny_female: null,
//                 },
//                 "x-y": {
//                     front_default: null,
//                     front_female: null,
//                     front_shiny: null,
//                     front_shiny_female: null,
//                 },
//             },
//             "generation-vii": {
//                 icons: {
//                     front_default:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/748.png",
//                     front_female: null,
//                 },
//                 "ultra-sun-ultra-moon": {
//                     front_default:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/748.png",
//                     front_female: null,
//                     front_shiny:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/748.png",
//                     front_shiny_female: null,
//                 },
//             },
//             "generation-viii": {
//                 icons: {
//                     front_default:
//                         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/748.png",
//                     front_female: null,
//                 },
//             },
//         },
//     },
//     stats: [
//         {
//             base_stat: 50,
//             effort: 0,
//             stat: {
//                 name: "hp",
//                 url: "https://pokeapi.co/api/v2/stat/1/",
//             },
//         },
//         {
//             base_stat: 63,
//             effort: 0,
//             stat: {
//                 name: "attack",
//                 url: "https://pokeapi.co/api/v2/stat/2/",
//             },
//         },
//         {
//             base_stat: 152,
//             effort: 2,
//             stat: {
//                 name: "defense",
//                 url: "https://pokeapi.co/api/v2/stat/3/",
//             },
//         },
//         {
//             base_stat: 53,
//             effort: 0,
//             stat: {
//                 name: "special-attack",
//                 url: "https://pokeapi.co/api/v2/stat/4/",
//             },
//         },
//         {
//             base_stat: 142,
//             effort: 0,
//             stat: {
//                 name: "special-defense",
//                 url: "https://pokeapi.co/api/v2/stat/5/",
//             },
//         },
//         {
//             base_stat: 35,
//             effort: 0,
//             stat: {
//                 name: "speed",
//                 url: "https://pokeapi.co/api/v2/stat/6/",
//             },
//         },
//     ],
//     types: [
//         {
//             slot: 1,
//             type: {
//                 name: "poison",
//                 url: "https://pokeapi.co/api/v2/type/4/",
//             },
//         },
//         {
//             slot: 2,
//             type: {
//                 name: "water",
//                 url: "https://pokeapi.co/api/v2/type/11/",
//             },
//         },
//     ],
//     weight: 145,
// };
