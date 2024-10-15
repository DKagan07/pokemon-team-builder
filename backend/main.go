package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/jackc/pgx/v5"
	_ "github.com/lib/pq"

	pokemonapi "pokemon-team-builder/handlers"
)

const (
	PORT = 3001
)

func main() {
	// Database setup
	ctx := context.Background()
	dbConnectionString := os.Getenv("DB_CONNECTION_STRING")
	db, err := pgx.Connect(ctx, dbConnectionString)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer db.Close(ctx)

	// Ping to make sure it is working. It should, because we depend on db in
	// compose.yaml
	if err := db.Ping(ctx); err != nil {
		fmt.Printf("error pinging db: %+v\n", err)
		os.Exit(1)
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	pokemonApiHandler := pokemonapi.NewPokemonApiHandler(db)

	// Basic CORS
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

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

		r.Get("/{pokename}", pokemonApiHandler.GetPokemonByName)
		r.Get("/stat/{statname}", pokemonApiHandler.GetStatByName)
		r.Get("/nature/{naturename}", pokemonApiHandler.GetNatureByName)
		r.Get("/item/{itemname}", pokemonApiHandler.GetItemByName)
		r.Get("/move/{movename}", pokemonApiHandler.GetMoveByName)
	})

	// Serve's up, man
	fmt.Printf("Starting server on PORT: %d\n", PORT)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", PORT), r))
}
