const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./routes/api');
const userRouter = require('./routes/userRouter');

const hostname = 'localhost';
const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.use('/', apiRouter);
app.use('/users', userRouter);

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
