# EasyFlow App

EasyFlow App is a minimal full-stack project with a React + Vite frontend and a Node.js + Express backend.

## Local Startup

Start the backend:

```bash
cd backend
npm install
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The frontend reads `VITE_API_URL` from `frontend/.env` and calls:

- `GET /api/health`
- `GET /api/message`

## Docker Startup

From the project root:

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000). The backend API is exposed at [http://localhost:4000](http://localhost:4000).

## Directory Structure

```text
easyflow-app/
├── .github/
│   └── workflows/
│       └── ci.yml
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── test/
│   │   └── app.test.js
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
├── .gitignore
└── README.md
```

## GitHub Actions

The first workflow is configured at `.github/workflows/ci.yml`. It runs on pushes and pull requests to `main`, installs backend and frontend dependencies, runs backend tests, builds the frontend, validates `docker-compose.yml`, and builds both Docker images.
