const express = require('express');
const app = express();

// Existing root route
app.get('/', (req, res) => {
  res.send('Hello from CodingAtom Cloud & DevOps Demo!');
});

// ✅ Health-check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
