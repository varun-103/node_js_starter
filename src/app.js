import express from 'express';

const app = express();
app.use(express.json());

// 👋 Welcome! Complete the routes below so the tests pass.

// TODO 1: GET /  -> respond with JSON { message: 'Hello World!' }
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// TODO 2: GET /health -> respond with status 200 and JSON { status: 'ok' }

// TODO 3: POST /echo -> respond with JSON { youSent: <the request body> }

export default app;
