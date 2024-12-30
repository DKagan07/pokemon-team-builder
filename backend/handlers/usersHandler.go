package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
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
		fmt.Printf("error inserting user into db: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	tokenString, err := createJWT(loginInfo.Username)
	if err != nil {
		fmt.Printf("error with creating JWT: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	cook := CreateCookie(tokenString)
	http.SetCookie(w, cook)

	// return something here, like a 200
	w.Header().Set("Access-Control-Allow-Credentials", "true")
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

	tokenString, err := createJWT(loginInfo.Username)
	if err != nil {
		fmt.Printf("error with creating JWT: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	cook := CreateCookie(tokenString)
	http.SetCookie(w, cook)

	// after successful login, we should redirect to "/" on the frontend, which
	// we do
	w.WriteHeader(http.StatusOK)
}

func (u *UsersHandler) LogOutUser(w http.ResponseWriter, r *http.Request) {
	usernameFromToken := r.Context().Value(UsernameKey).(string)

	defer r.Body.Close()
	b, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("error reading body of post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	var logoutUsername struct {
		UserLoggedIn string `json:"UserLoggedIn"`
	}

	if err := json.Unmarshal(b, &logoutUsername); err != nil {
		fmt.Printf("error unmarshal json from post request: %+v\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println("usernameFromToken: ", usernameFromToken)
	fmt.Println("usernameFromFrontend: ", logoutUsername.UserLoggedIn)

	if usernameFromToken == logoutUsername.UserLoggedIn {
		w.WriteHeader(http.StatusOK)
		return
	}

	http.Error(w, fmt.Sprintf("user %s cannot log out", usernameFromToken), http.StatusForbidden)
}

func (u *UsersHandler) GetUsername(w http.ResponseWriter, r *http.Request) {
	username := r.Context().Value(UsernameKey).(string)

	var v struct {
		Username string `json:"username"`
	}
	if err := json.Unmarshal([]byte(username), &v); err != nil {
		http.Error(
			w,
			fmt.Sprintf("Unmarshal json into struct: %v\n", err),
			http.StatusInternalServerError,
		)
		return
	}

	b, err := json.Marshal(v)
	if err != nil {
		http.Error(
			w,
			fmt.Sprintf("marshaling json: %v\n", err),
			http.StatusInternalServerError,
		)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	if _, err = w.Write(b); err != nil {
		http.Error(
			w,
			fmt.Sprintf("writing username to w: %v\n", err),
			http.StatusInternalServerError,
		)
		return
	}
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

// TODO: LOGOUT should also have the ability to get the cookie and immediately
// make the expiry time now

// createJWT creates a new JWT.
func createJWT(username string) (string, error) {
	key := os.Getenv("SUPER_SECRET_JWT_SIGNING_KEY")
	if key == "" {
		fmt.Println("super secret jwt signing key is not set")
		return "", errors.New("super secret jwt signing key is not set")
	}

	expiryTime := time.Now().Add(time.Hour * 24 * 7).Unix()
	mappedClaims := jwt.MapClaims{
		"username": username,
		// expiry time is 14 days from now
		"expiry": expiryTime,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, mappedClaims)

	tokenString, err := token.SignedString([]byte(key))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func CreateCookie(t string) *http.Cookie {
	return &http.Cookie{
		Name:  "token",
		Value: t,
		Path:  "/",
		// SameSite: http.SameSiteNoneMode,

		// MaxAge is 7 days, in seconds
		MaxAge: 604800,

		// Expires is also going to be 7 days
		Expires: time.Now().Add(time.Hour * 24 * 7),

		// Secure is set to false for local development
		// TODO: Once this becomes like production, this should be `true`, or a
		// function that reads an env var and returns a bool depending on env
		Secure: false,

		HttpOnly: true,
	}
}
