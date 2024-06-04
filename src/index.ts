import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint example
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express with TypeScript!' });
});

// Fallback to serve index.html for any unknown routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
