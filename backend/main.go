package main

import (
	"context"
	"database/sql"
	"embed"
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
	"github.com/pressly/goose/v3"

	handler "pokemon-team-builder/handlers"
)

const (
	PORT             = 3001
	PathToMigrations = "sql/schema"
)

//go:embed sql/schema/*.sql
var embedMigrations embed.FS

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

	// Migration setup
	// For some reason, using the pgx/v5 package, there's no way to get a
	// *sql.DB, so we create one with the default package. For all queries, we
	// will still use the pgx library though
	//
	// NOTE: On starting this migration with a fresh DB, there will be an
	// error that states "goose_db_version does not exist at character 36".
	// Despite this error, the migration still works.
	//
	sqldb, _ := sql.Open("postgres", dbConnectionString)
	defer sqldb.Close()

	goose.SetBaseFS(embedMigrations)
	if err = goose.SetDialect("postgres"); err != nil {
		fmt.Printf("failed to set dialect to postgres: %+v\n", err)
	}

	if err = goose.Up(sqldb, PathToMigrations); err != nil {
		fmt.Printf("failed goose up: %+v\n", err)
	}

	// Ping to make sure it is working. It should, because we depend on db in
	// compose.yaml
	if err := db.Ping(ctx); err != nil {
		fmt.Printf("error pinging db: %+v\n", err)
		os.Exit(1)
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Setup handlers
	pokemonApiHandler := handler.NewPokemonApiHandler(db)
	usersHandler := handler.NewUsersHandler(db)
	authHandler := handler.NewAuthHandler()

	// Basic CORS
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{
			"http://localhost:3000", "http://localhost:3001",
		}, // Use this to allow specific origin hosts
		// AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	// Routes
	r.Route("/", func(r chi.Router) {
		// A test route
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			res, err := json.Marshal("Hello, Linda!")
			if err != nil {
				http.Error(w, http.StatusText(422), 422)
			}
			if _, err := w.Write(res); err != nil {
				http.Error(w, http.StatusText(404), 404)
			}
		})

		// Users
		r.Route("/users", func(r chi.Router) {
			r.Post("/signup", usersHandler.SignUpUser)
			r.Post("/login", usersHandler.LoginUser)
		})

		// Pokemon
		r.Get("/{pokename}", pokemonApiHandler.GetPokemonByName)
		r.Get("/stat/{statname}", pokemonApiHandler.GetStatByName)
		r.Get("/nature/{naturename}", pokemonApiHandler.GetNatureByName)
		r.Get("/item/{itemname}", pokemonApiHandler.GetItemByName)
		r.Get("/move/{movename}", pokemonApiHandler.GetMoveByName)

		// Teams
		// TODO: will need a GET and POST, POST to save the team, GET to get
		// the team
		r.Route("/teams", func(r chi.Router) {
			r.Use(authHandler.EnsureLoggedIn)
			// test endpoint that should be behind the auth stuff
			r.Get("/", pokemonApiHandler.GetPokemonTeam)
		})
	})

	// Serve's up, man
	fmt.Printf("Starting server on PORT: %d\n", PORT)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", PORT), r))
}
