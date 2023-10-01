// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Define route handlers
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('You can contact us at contact@example.com.');
});

app.get('/login', (req, res) => {
  res.send('Please log in to access your account.');
});

app.get('/register', (req, res) => {
  res.send('To register a new account, visit the registration page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
