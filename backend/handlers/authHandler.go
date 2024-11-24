package handlers

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/golang-jwt/jwt/v5"
)

// AuthHandler is a struct that will hold all our handlers, and contain
// a DB connection from pgx
type AuthHandler struct {
	// Db *pgx.Conn
}

// NewAuthHandler returns a new http handler that has the auth methods and
// middleware
func NewAuthHandler( /*db *pgx.Conn*/ ) *AuthHandler {
	return &AuthHandler{
		// Db: db,
	}
}

// contextKey is a type alias for a string to add a username to the context
// from the JWT token
type contextKey string

const UsernameKey contextKey = "username"

// EnsureLoggedIn is a middleware function that will ideally gate users to hit
// ceratin endpoints based on whether they are logged in.
func (a *AuthHandler) EnsureLoggedIn(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		key := os.Getenv("SUPER_SECRET_JWT_SIGNING_KEY")

		// Check cookies! The token=djfsfjhsdl should be there
		cookie, err := r.Cookie("token")
		if err != nil {
			fmt.Println("error with getting cookie: ", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		tokenString := strings.TrimPrefix(cookie.String(), "token=")

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
			}
			return []byte(key), nil
		})

		if err != nil || !token.Valid {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		// We are passing the username that was in the claims to the next
		// handler so we have access to it
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			ctx := context.WithValue(r.Context(), UsernameKey, claims["username"])
			r = r.WithContext(ctx)
		}

		/*
			For example, to retreive the username from the context, we would:
			username := r.Context().Value(usernameKey).(string)
		*/

		next.ServeHTTP(w, r)
	})
}
