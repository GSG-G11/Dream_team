const express = require('express');
const path = require('path');
const { clientError, serverError } = require('./cotrollers/error');
const playerPost = require('./cotrollers/index');
const app = express();

app.disable('x-powered-by');
app.set('port', 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);
app.use(playerPost);
app.use(clientError);
app.use(serverError);

module.exports = app;
