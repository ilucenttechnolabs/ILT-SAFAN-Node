const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route