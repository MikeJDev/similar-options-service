const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
const db = require('../database/index.js');


app.get('/', (req, res) => {
  console.log('Heard that!');
  // return 5 random data sets when the page loads
  // NOTE: Am running tests using postman
  
  let randomProduct1 = Math.floor(Math.random() * 100) + 1;
  let randomProduct2 = Math.floor(Math.random() * 100) + 1;
  let randomProduct3 = Math.floor(Math.random() * 100) + 1;
  let randomProduct4 = Math.floor(Math.random() * 100) + 1;
  let randomProduct5 = Math.floor(Math.random() * 100) + 1;

  let queryString = `SELECT * from products where (product_id = ${randomProduct1}) OR (product_id = ${randomProduct2}) OR (product_id = ${randomProduct3}) OR (product_id = ${randomProduct4}) OR (product_id = ${randomProduct5});`;
  
  db.query(queryString, (err, result) => {
    if(err) {
      console.log('Error with get request for one of the five random rows, error is: ', err);
    } else {
      console.log("Successful get request for one of the five random rows!");
      res.send(result);
    }
  });
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});