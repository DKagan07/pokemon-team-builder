package main

import (
	"encoding/json"
	"net/http"
	pokemonapi "pokemon-team-builder/handlers"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main(){
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Route("/", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			res, err := json.Marshal("Hello, Linda!")
			if err != nil {
				http.Error(w, http.StatusText(422), 422)
			}
			if _, err := w.Write(res); err != nil {
				http.Error(w, http.StatusText(404), 404)
			}
		})

		r.Get("/{pokename}", pokemonapi.GetPokemonByName)
		r.Get("/stat/{statname}", pokemonapi.GetStatByName)
		r.Get("/nature/{naturename}", pokemonapi.GetNatureByName)
		r.Get("/item/{itemname}", pokemonapi.GetItemByName)
		r.Get("/move/{movename}", pokemonapi.GetMoveByName)
	})

	// Serve's up, man
	if err := http.ListenAndServe(":3001", r); err != nil {
		panic("cannot ListenAndServe")
	}
}
