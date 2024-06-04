const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// API endpoint example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Fallback to serve index.html for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
