package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
	"golang.org/x/crypto/bcrypt"
)

type UsersHandler struct {
	Db *pgx.Conn
}

func NewUsersHandler(db *pgx.Conn) *UsersHandler {
	return &UsersHandler{
		Db: db,
	}
}

type loginInfo struct {
	Username string `json:"username,omitempty" validate:"required"`
	Password string `json:"password,omitempty" validate:"required"`
}

type queryUserTable struct {
	Id        uuid.UUID
	CreatedAt time.Time
	UpdatedAt time.Time
	Username  string
	Password  string
}

func (u *UsersHandler) SignUpUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	b, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("error reading body of post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	var loginInfo loginInfo
	if err = json.Unmarshal(b, &loginInfo); err != nil {
		fmt.Printf("error unmarshal json from post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var queryUser queryUserTable
	err = u.Db.QueryRow(context.Background(), "SELECT * FROM users WHERE name=$1", loginInfo.Username).
		Scan(&queryUser.Id, &queryUser.CreatedAt, &queryUser.UpdatedAt, &queryUser.Username, &queryUser.Password)
	if err == pgx.ErrNoRows {
		fmt.Println("great! we're clear")
	}
	if err != pgx.ErrNoRows && err != nil {
		fmt.Printf("error querying users table: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// This is bad, we want to return to let the user know that this username is not valid
	if queryUser.Username != "" {
		fmt.Println("username is taken, exit early")
		http.Error(w, "username is already taken", http.StatusBadRequest)
		return
	}

	hashedPw, err := bcrypt.GenerateFromPassword([]byte(loginInfo.Password), 14)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	uid, err := uuid.NewV7()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	now := time.Now().UTC()

	if _, err = u.Db.Exec(
		context.Background(),
		"INSERT INTO users (id, created_at, updated_at, name, password) VALUES ($1, $2, $3, $4, $5)",
		uid, now, now, loginInfo.Username, string(hashedPw)); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		fmt.Printf("error inserting user into db: %+v\n", err)
	}

	// return something here, like a 200
	w.WriteHeader(http.StatusOK)
}
