const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const mentorRoute = require('./Server/routes/mentors');
const authRoute = require('./Server/routes/auth');
const usersRoute = require('./Server/routes/users');
const adminRoute = require('./Server/routes/admin');
const sessionsRoute = require('./Server/routes/sessions');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/mentors', mentorRoute);
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/admin', adminRoute);
app.use('/sessions', sessionsRoute);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;