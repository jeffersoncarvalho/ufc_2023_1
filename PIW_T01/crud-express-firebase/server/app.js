/*var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"

import indexRouter from "./routes/index"
import usersRouter from "./routes/users"
import professoresRouter from "./routes/professores"


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professores', professoresRouter);


//module.exports = app;
export default app