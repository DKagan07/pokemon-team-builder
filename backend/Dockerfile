FROM golang:1.22.1

WORKDIR /appback

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o ./backend .

CMD ["./backend"]
