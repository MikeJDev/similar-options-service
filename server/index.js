const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('../database/seed.js')

const app = express();
const port = 3000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('client/dist'));

app.get('/getFiveRandom', (req, res) => {
  db.Product.find({}).limit(5)
    .then((success) => {
      res.status(200).send(success)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});