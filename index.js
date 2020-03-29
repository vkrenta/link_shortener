const express = require('express');
const dotenv = require('dotenv');
require('console-stamp')(console, 'HH:MM:ss.l');
dotenv.config();
const app = express();
const useRoutes = require('./routes');
const mongoose = require('mongoose');
const validate = require('./helpers/secret_validation');
const { handler } = require('./helpers/errors');
const endMiddleware = require('./helpers/end_middleware');
const tokenExpired = require('./helpers/tokenExpired');

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(endMiddleware);

app.use(validate);

useRoutes(app);
app.use(tokenExpired);
app.use(handler);

const start = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: 1,
      useNewUrlParser: 1,
    })
    .then(() => console.log('Successful connection to MongoDB'))
    .catch(err => console.log(err.message));

  app.listen(process.env.PORT, () =>
    console.log('Listening port: ', process.env.PORT)
  );
};

start();
