const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const PORT = 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

// app.use((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// });

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
