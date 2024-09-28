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

// TODO: Add caching
// TODO: Perhaps add a database and auth so people can save their teams

// GetPokemonByName fetches a types.Pokemon from the Pokemon API
func GetPokemonByName(w http.ResponseWriter, r *http.Request) {
	// get name from url
	pokename := chi.URLParam(r, "pokename")
	fmt.Println("pokemon name: ", pokename)

	url := fmt.Sprintf("%s/pokemon/%s", pokemonApiV2, pokename)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting pokemon from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, fmt.Sprintf("reading from response body: %v", err.Error()), http.StatusInternalServerError)
	}

	var pokemon types.Pokemon
	json.Unmarshal(b, &pokemon)

	w.Header().Add("Content-Type", "application/json")
	w.Write(b)
}

// GetStatByName fetches a types.Stat from the Pokemon API
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
		http.Error(w, fmt.Sprintf("reading from response body: %v", err.Error()), http.StatusInternalServerError)
	}

	var stats types.Stat
	json.Unmarshal(b, &stats)

	w.Header().Add("Content-Type", "application/json")
	w.Write(b)
}

// GetNatureByName fetches a types.Nature from the Pokemon API
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
		http.Error(w, fmt.Sprintf("reading from response body: %v", err.Error()), http.StatusInternalServerError)
	}

	var natureInfo types.Nature
	json.Unmarshal(b, &natureInfo)

	w.Header().Add("Content-Type", "application/json")
	w.Write(b)
}

func GetItemByName(w http.ResponseWriter, r *http.Request) {
	item := chi.URLParam(r, "itemname")

	url := fmt.Sprintf("%s/item/%s", pokemonApiV2, item)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting item from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, fmt.Sprintf("reading from response body: %v", err.Error()), http.StatusInternalServerError)
	}

	var itemInfo types.Item
	json.Unmarshal(b, &itemInfo)

	w.Header().Add("Content-Type", "application/json")
	w.Write(b)
}

func GetMoveByName(w http.ResponseWriter, r *http.Request) {
	move := chi.URLParam(r, "movename")

	url := fmt.Sprintf("%s/move/%s", pokemonApiV2, move)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting move from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, fmt.Sprintf("reading from response body: %v", err.Error()), http.StatusInternalServerError)
	}

	var moveInfo types.Move
	json.Unmarshal(b, &moveInfo)

	w.Header().Add("Content-Type", "application/json")
	w.Write(b)
}
