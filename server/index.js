require('dotenv').config({ path: '.env' });

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api');
const userRouter = require('./routes/userRouter');

const movieRouter = require('./routes/movieRouter');

const hostname = 'localhost';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.use('/', apiRouter);
app.use('/users', userRouter);

app.use('/api/movies', movieRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    writeConcern: { w: 'majority' },
  })
  .then(() => {
    app.listen(process.env.PORT, hostname, () => {
      console.log(
        'Connected to database and listening on port',
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });


//api movies


app.use('/api', apiRouter);

const port = process.env.PORT || 3000; // use the PORT environment variable, or 3000 if it's not set

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});