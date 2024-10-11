export interface PkmnMove {
    accuracy: number
    contest_combos: ContestCombosSet
    contest_effect: ContestEffect
    contest_type: ContestType
    damage_class: DamageClass
    effect_chance: number
    effect_changes: EffectChange[]
    effect_entries: EffectEntry2[]
    flavor_text_entries: FlavorTextEntry[]
    generation: Generation
    id: number
    learned_by_pokemon: LearnedByPokemon[]
    machines: Machine[]
    meta: Meta
    name: string
    names: Name[]
    past_values: PastValue[]
    power: number
    pp: number
    priority: number
    stat_changes: StatChange[]
    super_contest_effect: SuperContestEffect
    target: Target
    type: Type
}

export interface ContestCombosSet {
    normal: ContestComboDetail
    super: ContestComboDetail
}

export interface ContestComboDetail {
    use_after: ContestUse[]
    use_before: ContestUse[]
}

export interface ContestUse {
    name: string
    url: string
}

export interface ContestEffect {
    url: string
}

export interface ContestType {
    name: string
    url: string
}

export interface DamageClass {
    name: string
    url: string
}

export interface EffectChange {
    effect_entries: EffectEntry[]
    version_group: VersionGroup
}

export interface EffectEntry {
    effect: string
    language: Language
}

export interface Language {
    name: string
    url: string
}

export interface VersionGroup {
    name: string
    url: string
}

export interface EffectEntry2 {
    effect: string
    language: Language2
    short_effect: string
}

export interface Language2 {
    name: string
    url: string
}

export interface FlavorTextEntry {
    flavor_text: string
    language: Language3
    version_group: VersionGroup2
}

export interface Language3 {
    name: string
    url: string
}

export interface VersionGroup2 {
    name: string
    url: string
}

export interface Generation {
    name: string
    url: string
}

export interface LearnedByPokemon {
    name: string
    url: string
}

export interface Machine {
    machine: Machine2
    version_group: VersionGroup3
}

export interface Machine2 {
    url: string
}

export interface VersionGroup3 {
    name: string
    url: string
}

export interface Meta {
    ailment: Ailment
    ailment_chance: number
    category: Category
    crit_rate: number
    drain: number
    flinch_chance: number
    healing: number
    max_hits: number
    max_turns: number
    min_hits: number
    min_turns: number
    stat_chance: number
}

export interface Ailment {
    name: string
    url: string
}

export interface Category {
    name: string
    url: string
}

export interface Name {
    language: Language4
    name: string
}

export interface Language4 {
    name: string
    url: string
}

export interface PastValue {
    accuracy?: number
    effect_chance: number
    effect_entries: EffectEntries[]
    power?: number
    pp: number
    type: Stat[]
    version_group: VersionGroup4
}

export interface EffectEntries {
    effect: string
    short_effect: string
    language: Category[]
}

export interface VersionGroup4 {
    name: string
    url: string
}

export interface StatChange {
    change: number
    stat: Stat
}

export interface Stat {
    name: string
    url: string
}

export interface SuperContestEffect {
    url: string
}

export interface Target {
    name: string
    url: string
}

export interface Type {
    name: string
    url: string
}

export const TestMove: PkmnMove = {
    "accuracy": 100,
    "contest_combos": null,
    "contest_effect": {
        "url": "https://pokeapi.co/api/v2/contest-effect/9/"
    },
    "contest_type": {
        "name": "smart",
        "url": "https://pokeapi.co/api/v2/contest-type/4/"
    },
    "damage_class": {
        "name": "physical",
        "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
    },
    "effect_chance": 30,
    "effect_changes": [],
    "effect_entries": [
        {
            "effect": "Inflicts regular damage.  Has a 30% chance to poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "short_effect": "Has a 30% chance to poison the target."
        }
    ],
    "flavor_text_entries": [
        {
            "flavor_text": "An attack that may\npoison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "gold-silver",
                "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
        },
        {
            "flavor_text": "An attack that may\npoison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "crystal",
                "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
        },
        {
            "flavor_text": "A toxic attack with barbs,\netc., that may poison.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "ruby-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
        },
        {
            "flavor_text": "A toxic attack with barbs,\netc., that may poison.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "emerald",
                "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
        },
        {
            "flavor_text": "The foe is stabbed\nwith a toxic barb,\netc. It may poison\nthe foe.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "firered-leafgreen",
                "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
        },
        {
            "flavor_text": "The foe is stabbed\nwith a poisonous\nbarb of some sort.\nIt may also poison\nthe target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "diamond-pearl",
                "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
        },
        {
            "flavor_text": "The foe is stabbed\nwith a poisonous\nbarb of some sort.\nIt may also poison\nthe target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "platinum",
                "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
        },
        {
            "flavor_text": "The foe is stabbed\nwith a poisonous\nbarb of some sort.\nIt may also poison\nthe target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "heartgold-soulsilver",
                "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "black-white",
                "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
        },
        {
            "flavor_text": "The user stabs the target\nwith a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "black-white",
                "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
        },
        {
            "flavor_text": "The user stabs the target\nwith a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "black-2-white-2",
                "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell\nvergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar\nal objetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "The user stabs the target\nwith a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "x-y",
                "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell\nvergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar al \nobjetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "The user stabs the target\nwith a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "omega-ruby-alpha-sapphire",
                "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "將有毒的針\n刺進對手進行攻擊。\n有時會讓對手陷入中毒狀態。",
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell\nvergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar al \nobjetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "The user stabs the target with a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "将有毒的针\n刺入对手进行攻击。\n有时会让对手陷入中毒状态。",
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "version_group": {
                "name": "sun-moon",
                "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "將有毒的針\n刺進對手進行攻擊。\n有時會讓對手陷入中毒狀態。",
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell\nvergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar al \nobjetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "The user stabs the target with a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "将有毒的针\n刺入对手进行攻击。\n有时会让对手陷入中毒状态。",
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "將有毒的針\n刺進對手進行攻擊。\n有時會讓對手陷入中毒狀態。",
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell\nvergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar al \nobjetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "The user stabs the target with a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "将有毒的针\n刺入对手进行攻击。\n有时会让对手陷入中毒状态。",
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "version_group": {
                "name": "lets-go-pikachu-lets-go-eevee",
                "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
        },
        {
            "flavor_text": "どくの　ある　ハリを\nあいてに　つきさして　こうげきする。\nどく　じょうたいに　することが　ある。",
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "독이 있는 침을\n상대에게 꿰찔러서 공격한다.\n독 상태로 만들 때가 있다.",
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "將有毒的針\n刺進對手進行攻擊。\n有時會讓對手陷入中毒狀態。",
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "Un dard toxique qui transperce l’ennemi.\nPeut aussi l’empoisonner.",
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "Angriff mit Giftstachel. Das Ziel wird eventuell vergiftet.",
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "Lanza un aguijón tóxico que puede envenenar al \nobjetivo.",
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "Colpisce il bersaglio con un aculeo tossico\nche può anche avvelenarlo.",
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "The user stabs the target with a poisonous stinger.\nThis may also poison the target.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "毒の　ある　ハリを\n相手に　突き刺して　攻撃する。\n毒状態に　することが　ある。",
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        },
        {
            "flavor_text": "将有毒的针\n刺入对手进行攻击。\n有时会让对手陷入中毒状态。",
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "version_group": {
                "name": "sword-shield",
                "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
        }
    ],
    "generation": {
        "name": "generation-i",
        "url": "https://pokeapi.co/api/v2/generation/1/"
    },
    "id": 40,
    "learned_by_pokemon": [
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        },
        {
            "name": "sandshrew",
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
        },
        {
            "name": "sandslash",
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
        },
        {
            "name": "nidoran-f",
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
        },
        {
            "name": "nidorina",
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
        },
        {
            "name": "nidoqueen",
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
        },
        {
            "name": "nidoran-m",
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
        },
        {
            "name": "nidorino",
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
        },
        {
            "name": "nidoking",
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
        },
        {
            "name": "tentacool",
            "url": "https://pokeapi.co/api/v2/pokemon/72/"
        },
        {
            "name": "tentacruel",
            "url": "https://pokeapi.co/api/v2/pokemon/73/"
        },
        {
            "name": "spinarak",
            "url": "https://pokeapi.co/api/v2/pokemon/167/"
        },
        {
            "name": "ariados",
            "url": "https://pokeapi.co/api/v2/pokemon/168/"
        },
        {
            "name": "gligar",
            "url": "https://pokeapi.co/api/v2/pokemon/207/"
        },
        {
            "name": "qwilfish",
            "url": "https://pokeapi.co/api/v2/pokemon/211/"
        },
        {
            "name": "wurmple",
            "url": "https://pokeapi.co/api/v2/pokemon/265/"
        },
        {
            "name": "beautifly",
            "url": "https://pokeapi.co/api/v2/pokemon/267/"
        },
        {
            "name": "dustox",
            "url": "https://pokeapi.co/api/v2/pokemon/269/"
        },
        {
            "name": "roselia",
            "url": "https://pokeapi.co/api/v2/pokemon/315/"
        },
        {
            "name": "cacnea",
            "url": "https://pokeapi.co/api/v2/pokemon/331/"
        },
        {
            "name": "cacturne",
            "url": "https://pokeapi.co/api/v2/pokemon/332/"
        },
        {
            "name": "roserade",
            "url": "https://pokeapi.co/api/v2/pokemon/407/"
        },
        {
            "name": "vespiquen",
            "url": "https://pokeapi.co/api/v2/pokemon/416/"
        },
        {
            "name": "skorupi",
            "url": "https://pokeapi.co/api/v2/pokemon/451/"
        },
        {
            "name": "drapion",
            "url": "https://pokeapi.co/api/v2/pokemon/452/"
        },
        {
            "name": "croagunk",
            "url": "https://pokeapi.co/api/v2/pokemon/453/"
        },
        {
            "name": "toxicroak",
            "url": "https://pokeapi.co/api/v2/pokemon/454/"
        },
        {
            "name": "gliscor",
            "url": "https://pokeapi.co/api/v2/pokemon/472/"
        },
        {
            "name": "venipede",
            "url": "https://pokeapi.co/api/v2/pokemon/543/"
        },
        {
            "name": "whirlipede",
            "url": "https://pokeapi.co/api/v2/pokemon/544/"
        },
        {
            "name": "scolipede",
            "url": "https://pokeapi.co/api/v2/pokemon/545/"
        },
        {
            "name": "frillish",
            "url": "https://pokeapi.co/api/v2/pokemon/592/"
        },
        {
            "name": "jellicent",
            "url": "https://pokeapi.co/api/v2/pokemon/593/"
        },
        {
            "name": "joltik",
            "url": "https://pokeapi.co/api/v2/pokemon/595/"
        },
        {
            "name": "galvantula",
            "url": "https://pokeapi.co/api/v2/pokemon/596/"
        },
        {
            "name": "mareanie",
            "url": "https://pokeapi.co/api/v2/pokemon/747/"
        },
        {
            "name": "toxapex",
            "url": "https://pokeapi.co/api/v2/pokemon/748/"
        },
        {
            "name": "overqwil",
            "url": "https://pokeapi.co/api/v2/pokemon/904/"
        },
        {
            "name": "clodsire",
            "url": "https://pokeapi.co/api/v2/pokemon/980/"
        },
        {
            "name": "qwilfish-hisui",
            "url": "https://pokeapi.co/api/v2/pokemon/10234/"
        }
    ],
    "machines": [],
    "meta": {
        "ailment": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/move-ailment/5/"
        },
        "ailment_chance": 30,
        "category": {
            "name": "damage+ailment",
            "url": "https://pokeapi.co/api/v2/move-category/4/"
        },
        "crit_rate": 0,
        "drain": 0,
        "flinch_chance": 0,
        "healing": 0,
        "max_hits": null,
        "max_turns": null,
        "min_hits": null,
        "min_turns": null,
        "stat_chance": 0
    },
    "name": "poison-sting",
    "names": [
        {
            "language": {
                "name": "ja-Hrkt",
                "url": "https://pokeapi.co/api/v2/language/1/"
            },
            "name": "どくばり"
        },
        {
            "language": {
                "name": "ko",
                "url": "https://pokeapi.co/api/v2/language/3/"
            },
            "name": "독침"
        },
        {
            "language": {
                "name": "zh-Hant",
                "url": "https://pokeapi.co/api/v2/language/4/"
            },
            "name": "毒針"
        },
        {
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "name": "Dard-Venin"
        },
        {
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "name": "Giftstachel"
        },
        {
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "name": "Picotazo Veneno"
        },
        {
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "name": "Velenospina"
        },
        {
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "name": "Poison Sting"
        },
        {
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "name": "どくばり"
        },
        {
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "name": "毒针"
        }
    ],
    "past_values": [
        {
            "accuracy": null,
            "effect_chance": null,
            "effect_entries": [],
            "power": null,
            "pp": null,
            "type": null,
            "version_group": {
                "name": "gold-silver",
                "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
        }
    ],
    "power": 15,
    "pp": 35,
    "priority": 0,
    "stat_changes": [],
    "super_contest_effect": {
        "url": "https://pokeapi.co/api/v2/super-contest-effect/19/"
    },
    "target": {
        "name": "selected-pokemon",
        "url": "https://pokeapi.co/api/v2/move-target/10/"
    },
    "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
    }
}
