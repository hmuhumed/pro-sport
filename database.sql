
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "cache" (
    "id" SERIAL PRIMARY KEY,
    "method" VARCHAR(20) NOT NULL,
    "url" VARCHAR(2000) NOT NULL,
    "params" VARCHAR(2000),
    "response" TEXT,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "bookmarks" (
"id" SERIAL PRIMARY KEY,
"player_id" INTEGER,
"comments" VARCHAR(1000),
"user_id" INT REFERENCES "user"
);

