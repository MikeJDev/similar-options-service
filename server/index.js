const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const db = require('../database/index.js');
app.use(express.static('client/dist'));

//need a get request to return 5 random products
//use graphql


app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});