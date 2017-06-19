const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require("mongoose");
const app = express();

//Auth
/*
app.use(expressJWT({ secret: "DnDAuthSecret" }).unless({ 
  path:["/api/characters", "/api/users"]})
);
*/

//DB COnnection
mongoose.connect('mongodb://localhost:27017/testdb');
var db = mongoose.connection;

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

//api
const api = require('./server/api.main');
app.use('/api', api);

// Trick to work with angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));