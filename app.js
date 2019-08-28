const express = require('express');
const app = express();

const signupRoutes = require('./Server/routes/auth/signup');

app.use('/signup', signupRoutes);

module.exports = app;