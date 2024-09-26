package pokemonapi

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"pokemon-team-builder/types"

	"github.com/go-chi/chi/v5"
)

const pokemonApiV2 = "https://pokeapi.co/api/v2"

func GetPokemonByName(w http.ResponseWriter, r *http.Request) {
	// if need to get an API key, get it here

	// get name from url
	pokename := chi.URLParam(r, "pokename")
	fmt.Println("pokename: ", pokename)

	url := fmt.Sprintf("%s/pokemon/%s", pokemonApiV2, pokename)

	fmt.Println("before get")
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("error with get")
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("err")
	}

	var pokemon types.Pokemon
	json.Unmarshal(b, &pokemon)

	fmt.Println("pokemon: ", pokemon.Abilities)

	// resp.Write(w)
}
