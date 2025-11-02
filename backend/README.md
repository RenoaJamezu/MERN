# Backend — MERN Workout API

This README covers the Express + MongoDB backend. 

## Summary

- Minimal Express server exposing a REST API at `/api/workouts`.
- Uses Mongoose to connect to MongoDB and a `Workout` model for CRUD operations.

## Prerequisites

- Node.js (LTS recommended, e.g. Node 18+)
- npm (bundled with Node) or yarn
- A MongoDB connection string (Atlas or self-hosted)

## Environment variables

Create a `.env` file in the `backend/` folder (this repo includes an example `.env` during development). The server expects:

- `PORT` — port the server listens on (default used in examples: 4000)
- `MONGO_URI` — MongoDB connection string

Example `.env`:

```
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/mydb
```

NOTE: Do not commit `.env` or secrets to source control. Add `.env` to `.gitignore` if it's not already ignored.

## Install

From the `backend/` directory:

```bash
npm install
```

## Scripts

From `package.json` in `backend/`:

- `npm start` — run `node server.js` (production)
- `npm run dev` — run `nodemon server.js` (development, requires `nodemon` to be installed globally or as a dev dependency)

Start the backend (development):

```bash
npm run dev
```

Or production:

```bash
npm start
```

## API (quick reference)

Base path: `http://localhost:<PORT>/api/workouts` (default PORT=4000)

- GET `/` — Get all workouts
- GET `/:id` — Get a single workout
- POST `/` — Create a workout (JSON body)
- PATCH `/:id` — Update a workout
- DELETE `/:id` — Delete a workout

Example create (curl):

```bash
curl -X POST http://localhost:4000/api/workouts \
  -H "Content-Type: application/json" \
  -d '{"title":"Chest day","load":80,"reps":8}'
```

## Run locally (backend only)

Start the backend server locally. From the repository `backend/` folder run:

```bash
# install dependencies
npm install

# (development) start with nodemon if available
npm run dev

# or start with node for production-like run
npm start
```

Notes:
- `npm run dev` uses `nodemon` as declared in `package.json` (if you don't have `nodemon` installed, install it as a dev dependency: `npm i -D nodemon` or install globally: `npm i -g nodemon`).
- The server reads `PORT` and `MONGO_URI` from `.env` — ensure the file exists and is populated.

## Troubleshooting

- MongoDB connection errors: verify `MONGO_URI` and that Atlas allows your IP (or use a development whitelist).
- Port conflicts: change `PORT` in `.env` or stop the process using the port.
- Missing dependencies: run `npm install` in the affected folder.

## Recommendations

- Install `nodemon` as a devDependency for the backend: `npm i -D nodemon`.
