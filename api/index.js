const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint example

// Fallback to serve index.html for any unknown routes


// Handle POST request for connecting to the wallet
app.get('/connect-wallet', async (req, res) => {
  try {
    res.json({msg:"scs"});
  //   const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  //     manifestUrl: '/public/tonconnect-manifest.json',
  //     buttonRootId: 'ton-connect'
  // });
  //   const connectedWallet = await tonConnectUI.connectWallet();
    res.json(connectedWallet);
  } catch (error) {
    console.error('Error connecting to wallet:', error);
    res.status(500).json({ error: 'Error connecting to wallet' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// import express, { Request, Response } from 'express';
// import path from 'path';

// const app = express();
// const port = 3000;

// // Middleware to serve static files from the public directory
// app.use(express.static(path.join(__dirname, '../public')));

// // API endpoint example
// app.get('/api/hello', (req: Request, res: Response) => {
//   res.json({ message: 'Hello from Express with TypeScript!' });
// });

// // Fallback to serve index.html for any unknown routes
// app.get('*', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
