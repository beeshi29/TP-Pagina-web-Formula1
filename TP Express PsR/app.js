var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personajesRouter = require('./routes/personajes');
var equipoRouter = require('./routes/equipo');
var circuitoRouter = require('./routes/circuito');

var app = express();

app.use(cors());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/personajes', personajesRouter);
app.use('/equipos', equipoRouter);
app.use('/circuito', circuitoRouter);
app.use('/piloto1', equipoRouter);
app.use('/piloto2', equipoRouter);
app.use('/dorsal1', equipoRouter);
app.use('/dorsal2', equipoRouter);   
app.use('/icon', personajesRouter);
app.use('/country', personajesRouter);
app.use('/country', circuitoRouter);
module.exports = app;
  