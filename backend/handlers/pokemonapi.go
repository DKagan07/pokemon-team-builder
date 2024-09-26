package pokemonapi

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"pokemon-team-builder/types"

	"github.com/go-chi/chi/v5"
)

const pokemonLevel = 50
const pokemonApiV2 = "https://pokeapi.co/api/v2"


/*
	Of Note: This is only for Gen7 and beyond

	calculations for hp:
	floor(0.01 * (2 * baseStat + IV + floor(0.25 * EV)) * level) + level + 10

	calculation for all other:
	(floor(0.01 * (2 * baseStat + IV + floor(0.25 * EV)) * level) + 5) * nature

	for natures, that increase stat, mult by 1.1
	for natures, that lower stat, mult by 0.9

	Per stat, max IV you can have is 31
	Per stat, max EV you can have is 252
	Per pokemon, you can only have 510 EVs
*/

// TODO: Fix error handling

func GetPokemonByName(w http.ResponseWriter, r *http.Request) {
	// get name from url
	pokename := chi.URLParam(r, "pokename")

	url := fmt.Sprintf("%s/pokemon/%s", pokemonApiV2, pokename)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting pokemon from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("err")
	}

	var pokemon types.Pokemon
	json.Unmarshal(b, &pokemon)

	resp.Write(w)
}

func GetStatByName(w http.ResponseWriter, r *http.Request) {
	// get stat out of URL
	stat := chi.URLParam(r, "statname")

	url := fmt.Sprintf("%s/stat/%s", pokemonApiV2, stat)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting stat from api: %v", err.Error()), http.StatusNotFound)
		return
	}

	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("err")
	}

	var stats types.Stat
	json.Unmarshal(b, &stats)

	resp.Write(w)
}

func GetNatureByName(w http.ResponseWriter, r *http.Request) {
	nature := chi.URLParam(r, "naturename")

	url := fmt.Sprintf("%s/nature/%s", pokemonApiV2, nature)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting nature from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("err")
	}

	var natureInfo types.Nature
	json.Unmarshal(b, &natureInfo)

	resp.Write(w)
}
