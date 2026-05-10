import express from 'express';
import cors from 'cors';
import { analyzeRouter } from './routes/analyze';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['https://thepaminsider.com', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
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
