const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
const db = require('../database/index.js');


app.use(express.static('client/dist'));

app.get('/getFiveRandom', (req, res) => {
  console.log('Heard that!');
  // return 5 random data sets when the page loads
  // NOTE: Am running tests using postman
  
  const randomFiveProducts = [];
  
  const generateFiveRandomProducts = function() {
    for(let i = 0; i < 5; i++) {
      randomFiveProducts.push(Math.floor(Math.random() * 100) + 1);
    }
  }
  
  generateFiveRandomProducts();
  
  //confirm that randomFiveProducts array has no duplicate product ids
  while( new Set(randomFiveProducts).size !== 5) {
    generateFiveRandomProducts();
  }

  let queryString = `SELECT * from products where (product_id = ${randomFiveProducts[0]}) OR (product_id = ${randomFiveProducts[1]}) OR (product_id = ${randomFiveProducts[2]}) OR (product_id = ${randomFiveProducts[3]}) OR (product_id = ${randomFiveProducts[4]});`;

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