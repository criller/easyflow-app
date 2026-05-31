import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'easyflow-backend'
  });
});

app.get('/api/message', (_req, res) => {
  res.json({
    message: 'Hello from EasyFlow API'
  });
});

export default app;

