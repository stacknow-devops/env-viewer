const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML from /public
app.use(express.static(path.join(__dirname, 'public')));

// API route to return env vars (filtering only desired ones)
app.get('/env', (req, res) => {
  const envVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith('PUBLIC_'))  // customize prefix as needed
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  res.json(envVars);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});