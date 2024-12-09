package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jackc/pgx/v5"

	"pokemon-team-builder/types"
)

const (
	pokemonLevel = 50
	pokemonApiV2 = "https://pokeapi.co/api/v2"
)

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

// PokemonApiHandler is a struct that will hold all our handlers, and contain
// a DB connection from pgx
type PokemonApiHandler struct {
	Db *pgx.Conn
}

func NewPokemonApiHandler(db *pgx.Conn) *PokemonApiHandler {
	return &PokemonApiHandler{
		Db: db,
	}
}

// PokemonSQLResponse is an instance of the expected response we get from a SQL
// query, since our DB schema only has 2 fields
type PokemonSQLResponse struct {
	Name     string
	Response types.Pokemon
}

// GetPokemonByName fetches a types.Pokemon from the Pokemon API, or returns it
// from database
func (p *PokemonApiHandler) GetPokemonByName(w http.ResponseWriter, r *http.Request) {
	pokename := chi.URLParam(r, "pokename")

	// Query Db to see if we already have this pokemon "cached"
	var pokemonSQL PokemonSQLResponse
	err := p.Db.QueryRow(context.Background(), "SELECT * FROM pokemon WHERE name=$1;", pokename).
		Scan(&pokemonSQL.Name, &pokemonSQL.Response)
	if err != pgx.ErrNoRows && err != nil {
		fmt.Printf("error querying for first check db: %+v\n", err)
		http.Error(w, fmt.Sprintf("error querying db: %v\n", err), http.StatusInternalServerError)
		return
	}

	// If the poke is in the db, we can just send it
	if pokemonSQL.Name != "" {
		b, err := json.Marshal(pokemonSQL.Response)
		if err != nil {
			http.Error(w, "marshaling json", http.StatusInternalServerError)
			return
		}

		w.Header().Add("Content-Type", "application/json")
		if _, err := w.Write(b); err != nil {
			http.Error(w, "writing to response", http.StatusInternalServerError)
			return
		}
		return
	}

	// If not in db, we get the info from the API, and we need to add it to the
	// db
	url := fmt.Sprintf("%s/pokemon/%s", pokemonApiV2, pokename)
	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting pokemon from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(
			w,
			fmt.Sprintf("reading from response body: %v", err.Error()),
			http.StatusInternalServerError,
		)
		return
	}

	var pokemon types.Pokemon
	if err = json.Unmarshal(b, &pokemon); err != nil {
		http.Error(w, "unmarshal resp body into pokemon", http.StatusInternalServerError)
	}

	if _, err = p.Db.Exec(context.Background(), "INSERT INTO pokemon (name, response) VALUES ($1, $2);", pokemon.Name, pokemon); err != nil {
		http.Error(w, "inserting pokemon into db", http.StatusInternalServerError)
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err := w.Write(b); err != nil {
		http.Error(w, "writing to response", http.StatusInternalServerError)
		return
	}
}

// PokemonStatSQLResponse is an instance of the expected response we get from a
// SQL query, since our DB schema only has 2 fields
type PokemonStatSQLResponse struct {
	Name     string
	Response types.Stat
}

// GetStatByName fetches a types.Stat from the Pokemon API or returns it from
// the database
// TODO: Implement database integration in this -- still hasn't been implemented
// in the frontned
func (p *PokemonApiHandler) GetStatByName(w http.ResponseWriter, r *http.Request) {
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
		http.Error(
			w,
			fmt.Sprintf("reading from response body: %v", err.Error()),
			http.StatusInternalServerError,
		)
	}

	var stats types.Stat
	if err = json.Unmarshal(b, &stats); err != nil {
		http.Error(w, "unmarshal resp body into stat", http.StatusInternalServerError)
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err := w.Write(b); err != nil {
		http.Error(w, "writing to response", http.StatusInternalServerError)
		return
	}
}

// PokemonNatureSQLResponse is an instance of the expected response we get from
// a SQL query, since our DB schema only has 2 fields
type PokemonNatureSQLResponse struct {
	Name     string
	Response types.Nature
}

// GetNatureByName fetches a types.Nature from the Pokemon API or returns it
// from the database
// TODO: Implement database integration in this -- still hasn't been implemented
// in the frontned
func (p *PokemonApiHandler) GetNatureByName(w http.ResponseWriter, r *http.Request) {
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
		http.Error(
			w,
			fmt.Sprintf("reading from response body: %v", err.Error()),
			http.StatusInternalServerError,
		)
	}

	var natureInfo types.Nature
	if err = json.Unmarshal(b, &natureInfo); err != nil {
		http.Error(w, "unmarshal resp body into nature", http.StatusInternalServerError)
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err := w.Write(b); err != nil {
		http.Error(w, "writing to response", http.StatusInternalServerError)
		return
	}
}

// PokemonItemSQLResponse is an instance of the expected response we get from
// a SQL query, since our DB schema only has 2 fields
type PokemonItemSQLResponse struct {
	Name     string
	Response types.Item
}

// TODO: Implement database integration in this -- still hasn't been implemented
// in the frontned
func (p *PokemonApiHandler) GetItemByName(w http.ResponseWriter, r *http.Request) {
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
		http.Error(
			w,
			fmt.Sprintf("reading from response body: %v", err.Error()),
			http.StatusInternalServerError,
		)
	}

	var itemInfo types.Item
	if err = json.Unmarshal(b, &itemInfo); err != nil {
		http.Error(w, "unmarshal resp body into item", http.StatusInternalServerError)
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err := w.Write(b); err != nil {
		http.Error(w, "writing to response", http.StatusInternalServerError)
		return
	}
}

// PokemonMoveSQLResponse is an instance of the expected response we get from
// a SQL query, since our DB schema only has 2 fields
type PokemonMoveSQLResponse struct {
	Name     string
	Response types.Move
}

// GetMoveByName fetches a types.Move from the Pokemon API, or returns it
// from database
func (p *PokemonApiHandler) GetMoveByName(w http.ResponseWriter, r *http.Request) {
	move := chi.URLParam(r, "movename")

	// Check database first. If it's there, we return that
	var pokemonSQLMove PokemonMoveSQLResponse
	err := p.Db.QueryRow(context.Background(), "SELECT * FROM pokemonMove WHERE name=$1;", move).
		Scan(&pokemonSQLMove.Name, &pokemonSQLMove.Response)
	if err != pgx.ErrNoRows && err != nil {
		http.Error(w, fmt.Sprintf("error querying db: %v\n", err), http.StatusInternalServerError)
		return
	}

	if pokemonSQLMove.Name != "" {
		b, err := json.Marshal(pokemonSQLMove.Response)
		if err != nil {
			http.Error(w, "marshaling json", http.StatusInternalServerError)
			return
		}

		w.Header().Add("Content-Type", "application/json")
		if _, err := w.Write(b); err != nil {
			http.Error(w, "writing to response", http.StatusInternalServerError)
			return
		}
		return
	}

	// Not in database, we issue the API call
	url := fmt.Sprintf("%s/move/%s", pokemonApiV2, move)
	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, fmt.Sprintf("getting move from api: %v", err.Error()), http.StatusNotFound)
		return
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(
			w,
			fmt.Sprintf("reading from response body: %v", err.Error()),
			http.StatusInternalServerError,
		)
	}

	var moveInfo types.Move
	if err = json.Unmarshal(b, &moveInfo); err != nil {
		http.Error(w, "unmarshal resp body into move", http.StatusInternalServerError)
	}

	if _, err = p.Db.Exec(context.Background(), "INSERT INTO pokemonMove (name, response) VALUES ($1, $2);", moveInfo.Name, moveInfo); err != nil {
		http.Error(w, fmt.Sprintf("inserting into db: %v", err), http.StatusInternalServerError)
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err := w.Write(b); err != nil {
		http.Error(w, "writing to response", http.StatusInternalServerError)
		return
	}
}

type PokemonTeamSQLResponse struct {
	User string
	Team interface{}
}

// GetPokemonTeam is an authenticated endpoint that returns a list of teams for
// a logged in user. It will return a 204 if there is no team saved
func (p *PokemonApiHandler) GetPokemonTeam(w http.ResponseWriter, r *http.Request) {
	username := r.Context().Value(UsernameKey).(string)
	fmt.Println("username: ", username)

	var team PokemonTeamSQLResponse
	err := p.Db.QueryRow(context.Background(), "SELECT * FROM pokemonTeam WHERE username=$1;", username).
		Scan(&team.User, &team.Team)
	if err != pgx.ErrNoRows && err != nil {
		fmt.Printf("error querying for team in db: %+v\n", err)
		http.Error(w, fmt.Sprintf("error querying db: %v\n", err), http.StatusInternalServerError)
		return
	}
	if err == pgx.ErrNoRows {
		fmt.Println("no team found for user")
		w.WriteHeader(http.StatusNoContent)
		return
	}

	fmt.Printf("team: %+v\n", team.Team)
}

// SavePokemonTeam is an authenticated endpoint that will save a users team to
// the database.
func (p *PokemonApiHandler) SavePokemonTeam(w http.ResponseWriter, r *http.Request) {
	username := r.Context().Value(UsernameKey).(string)
	fmt.Println("username: ", username)

	// Read the team from the request
	defer r.Body.Close()
	b, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("error reading body of post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	// The team we get from the frontend is a list of pokemon team names
	// (strings). All of these names should be in our database already, so
	// looking them up and saving them should be easy

	var upt struct {
		Team []types.Pokemon
	}
	if err = json.Unmarshal(b, &upt); err != nil {
		fmt.Printf("error unmarshal json from post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Printf("upt: %+v\n", upt.Team[0].Abilities)

	tb, err := json.Marshal(upt.Team)
	if err != nil {
		fmt.Printf("error marshal json for db insertion: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Insert the team to the DB
	if _, err = p.Db.Exec(
		context.Background(),
		"INSERT INTO pokemonTeam (username, team) VALUES ($1, $2);",
		username,
		tb,
	); err != nil {
		fmt.Println("error here")
	}

	w.WriteHeader(http.StatusCreated)
}
