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

// TODO: also look into JWT and session tokens

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
		http.Error(w, err.Error(), http.StatusBadRequest)
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

	hashedPw, err := hashPassword(loginInfo.Password)
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

	_, err = u.Db.Exec(
		context.Background(),
		"INSERT INTO users (id, created_at, updated_at, name, password) VALUES ($1, $2, $3, $4, $5)",
		uid,
		now,
		now,
		loginInfo.Username,
		hashedPw,
	)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		fmt.Printf("error inserting user into db: %+v\n", err)
	}

	// return something here, like a 200
	w.WriteHeader(http.StatusCreated)
}

// LoginUser is the handler function that handles comparing the passwords for
// the usernames
func (u *UsersHandler) LoginUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	b, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("error reading body of post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	var loginInfo loginInfo
	if err = json.Unmarshal(b, &loginInfo); err != nil {
		fmt.Printf("error unmarshal json from post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var queryUser queryUserTable
	err = u.Db.QueryRow(context.Background(), "SELECT name, password FROM users WHERE name=$1", loginInfo.Username).
		Scan(&queryUser.Username, &queryUser.Password)
	if err != nil || err == pgx.ErrNoRows {
		fmt.Printf("error with getting username and password from db: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if ok := comparePassword(loginInfo.Password, queryUser.Password); !ok {
		fmt.Println("for username, passwords don't match")
		http.Error(w, "username or password are incorrect", http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
}

// hashPassword uses the bcrypt package to has a password with the default cost
// Of note, no need to salt passwords. Using bcrypt's GenerateFromPassword
// method, bcrypt automatically generates a random salt and incorporates it
func hashPassword(pass string) (string, error) {
	hashedPw, err := bcrypt.GenerateFromPassword([]byte(pass), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}

	return string(hashedPw), nil
}

// comparePassword will compare the hash of both passwords with bcrypt
func comparePassword(incPassPlainText, passFromDB string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(passFromDB), []byte(incPassPlainText))
	return err == nil
}
