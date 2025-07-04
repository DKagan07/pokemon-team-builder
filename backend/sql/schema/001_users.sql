-- +goose Up
CREATE TABLE users (id UUID PRIMARY KEY, created_at TIMESTAMP, updated_at TIMESTAMP, name VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL);
CREATE TABLE pokemon (name VARCHAR(255) PRIMARY KEY UNIQUE, response JSONB);
CREATE TABLE pokemonMove (name VARCHAR(255) PRIMARY KEY UNIQUE, response JSONB);
CREATE TABLE pokemonItem (name VARCHAR(255) PRIMARY KEY UNIQUE, response JSONB);
CREATE TABLE pokemonNature (name VARCHAR(255) PRIMARY KEY UNIQUE, response JSONB);
CREATE TABLE pokemonStat (name VARCHAR(255) PRIMARY KEY UNIQUE, response JSONB);
CREATE TABLE pokemonTeam (t_id SERIAL PRIMARY KEY, username VARCHAR(255), team JSONB);


-- +goose Down
DROP TABLE users;
DROP TABLE pokemon;
DROP TABLE pokemonMove;
DROP TABLE pokemonItem;
DROP TABLE pokemonNature;
DROP TABLE pokemonStat;
DROP TABLE pokemonTeam;
