# Pokemon Team Builder

### Purpose

This is a personal project that I am using to practice a full-stack web
application using Go in the backend, NextJS (pages router) with TS in the
frontend, and Docker for local deployment, all built from scratch

This is currently setup such that, while Docker is running, anybody can run
`make docker-images` to create the images and `docker compose up` to run all the
services locally. Speficially, this does:

1. Runs the 3 services:
   - A postgres instance
     - For some reason, there will be multiple attempts to spin up the db, of
       which there will be errors, but it will eventually connect
   - A backend service
   - A frontend service
2. Run a migration with the help of Goose to create the necessary tables

### Technologies Used

- Go
  - GoChi
  - Goose
  - pgx/v5
- NextJS
  - ESLint
  - TypeScript
  - TailwindCSS
- Postgres

### Details

You can connect to the web app at [http://localhost:3000](http://localhost:3000)

The idea is that in Competitive Pokemon, building a well-rounded team of 6
pokemon is an important step to winning tournaments.

Knowing the stats, EVs, and movesets are important to building that team. This
app is built to help customize all of these important points for each pokemon,
and to save teams to look back on.
