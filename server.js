// backend/server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Temporary in-memory store
let userCredits = 0;

// Emissions Calculator
app.post('/api/calculate-emissions', (req, res) => {
  const { electricity, car } = req.body;
  const electricityFactor = 0.233;
  const carFactor = 0.121;

  const total = parseFloat(electricity * electricityFactor + car * carFactor).toFixed(2);
  res.json({ emissions: total });
});

// Simulate buying credits
app.post('/api/buy-credits', (req, res) => {
  const { amount } = req.body;
  userCredits += parseInt(amount);
  res.json({ message: 'Credits purchased successfully', totalCredits: userCredits });
});

// Simulate report download
app.get('/api/reports/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'reports', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'Report not found' });
  }
});

app.listen(PORT, () => {
  console.log(`BulkCarbon backend running on http://localhost:${PORT}`);
});
