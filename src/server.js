const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node CI/CD Pipeline 🚀');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

module.exports = app;
