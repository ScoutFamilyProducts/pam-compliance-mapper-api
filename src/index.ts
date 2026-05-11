import express from 'express';
import cors from 'cors';
import { analyzeRouter } from './routes/analyze';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'https://thepaminsider.com',
    'https://www.thepaminsider.com',
    'http://thepaminsider.com',
    'http://www.thepaminsider.com',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'pam-compliance-mapper-api', timestamp: new Date().toISOString() });
});

app.use('/api', analyzeRouter);

app.listen(PORT, () => {
  console.log(`PAM Compliance Mapper API running on port ${PORT}`);
});
