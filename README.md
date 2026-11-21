# Express API Lab

Complete the routes in `src/app.js` so the tests pass. Keep `export default app;` at the bottom.

## Tasks

1. **`GET /`** — respond with JSON `{ "message": "Hello World!" }` (the starter currently says `"Hello from Express!"` — fix it).
2. **`GET /health`** — respond with status `200` and JSON `{ "status": "ok" }`.
3. **`POST /echo`** — read the JSON body and respond with `{ "youSent": <the body you received> }`.

## Run

```bash
npm install
npm test        # runs vitest once
npm run dev     # starts the server on http://localhost:8080
```

`express.json()` is already enabled, so the parsed request body is available on `req.body`.
