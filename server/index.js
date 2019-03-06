const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('../database/index.js');
const mongoose = require('mongoose')

const app = express();
const port = 3000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('client/dist'));

//need a get request to return 5 random products
app.get('/getFiveRandom', (req, res) => {
  console.log(db)
  db.Product.find({}).limit(5)
    .then((success) => {
      console.log(success)
    })
    .catch((err) => {
      console.log(err)
    })
  res.send("hello", success)
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});