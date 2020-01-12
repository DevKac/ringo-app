const fs = require('fs');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.static('./public/ringo-app/dist/ringo-app'));

app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

const apiPath = '/api/tables';

app.get(apiPath + '/food', function (req, res) {
  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync('./json/food.json')));
  }, 1000);
});

app.get(apiPath + '/drinks', function (req, res) {
  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync('./json/drinks.json')));
  }, 500);
});

app.get(apiPath + '/movies', function (req, res) {
  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync('./json/movies.json')));
  }, 5000)
});

app.get(apiPath + '/animals', function (req, res) {
  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync('./json/animals.json')));
  }, 2000);
});

app.get(apiPath + '/house', function (req, res) {
  setTimeout(() => {
    res.json(JSON.parse(fs.readFileSync('./json/house.json')));
  }, 1500);
});

var server = app.listen(8080, function () {
  var port = server.address().port;
   
  console.log("Server running on port %s", port);
});
