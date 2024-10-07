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
