package handlers

import (
	"fmt"
	"net/http"
	"strings"
)

// AuthHandler is a struct that will hold all our handlers, and contain
// a DB connection from pgx
type AuthHandler struct {
	// Db *pgx.Conn
}

func NewAuthHandler( /*db *pgx.Conn*/ ) *AuthHandler {
	return &AuthHandler{
		// Db: db,
	}
}

// EnsureLoggedIn is a middleware function that will ideally gate users to hit
// ceratin endpoints based on whether they are logged in.
func (a *AuthHandler) EnsureLoggedIn(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// key := os.Getenv("SUPER_SECRET_JWT_SIGNING_KEY")

		authHeader := r.Header.Get("Authorization")

		// The frontend prepends the cookie in the header with "Bearer "
		// Ex. In the header, it'll look like "Authorization": "Bearer dasfasdjfAKJ"
		if strings.HasPrefix(authHeader, "Bearer ") {
			authHeader = authHeader[len("Bearer "):]
		}

		fmt.Println("authHeader: ", authHeader)

		// If the above fails, we can check the cookies
		cookie, err := r.Cookie("token")
		if err != nil {
			fmt.Println("error with getting cookie: ", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		fmt.Printf("cookie: %+v\n", cookie)

		/* possible:
			// parse and validate the token string with JWT lib
			token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
				// Check the signing method
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
				}
				return []byte(key), nil
			})

			if err != nil || !token.Valid {
				http.Error(w, "Unauthorized", http.StatusUnauthorized)
				return
			}

			// You can optionally extract the claims here and pass them to the next handler
			// For example, you could extract the user ID and set it as a context value
			if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
				// Optionally, set the claims in the context
				// You could use context.WithValue to set the user info here if needed
				// Example: ctx := context.WithValue(r.Context(), "user", claims["user_id"])

				// You can pass the claims along or handle user-specific logic here
				// For example: r = r.WithContext(ctx)
			}

			// Continue to the next handler if the token is valid
			next.ServeHTTP(w, r)
		})


		*/

		next.ServeHTTP(w, r)
	})
}
