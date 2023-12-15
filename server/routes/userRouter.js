const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../auth');

const userRouter = express.Router();

userRouter.route('/').get((req, res, next) => {
  User.find()
    .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
    .catch((err) => next(err));
});

userRouter.post('/register', (req, res) => {
  User.register(
    new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      dob: req.body.dob,
    }),
    req.body.password,
    (err) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Registration Successful!' });
        });
      }
    }
  );
});

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token, status: 'You are successfully logged in!' });
});

//check if the user is already logged in
userRouter.post('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.setHeader('session-id');
    // res.redirect('/');
    // console.log('You are logged out!');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: true, status: 'You are logged out!' });
  } else {
    const err = new Error('You are not logged in!');
    err.status = 401;
    return next(err);
  }
});

//favorites
userRouter
  .route('/:userId/favorites')
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    User.findById(req.params.userId)
      .then((user) => {
        if (user) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user.favorites);
        } else {
          err = new Error('User not found');
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    User.findById(req.params.userId)
      .then((user) => {
        if (user) {
          // TODO check if movie id exist in the body
          user.favorites.push(req.body);

          user
            .save()
            .then((user) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user);
            })
            .catch((err) => next(err));
        } else {
          err = new Error('User not found');
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

userRouter
  .route('/:userId/favorites/:movieId')
  .options((req, res) => res.sendStatus(200))
  .delete((req, res, next) => {
    User.findById(req.params.userId)
      .then((user) => {
        if (user) {
          user.favorites = user.favorites.filter(
            (movie) => movie.movieId !== req.params.movieId
          );
          user
            .save()
            .then((user) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user.favorites);
            })
            .catch((err) => next(err));
        } else {
          err = new Error('User not found');
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

module.exports = userRouter;
