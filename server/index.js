const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
const db = require('../database/index.js');


app.use(express.static('client/dist'));
//app.use(express.static('client/src'));

app.get('/getFiveRandom', (req, res) => {
  console.log('Heard that!');
  // return 5 random data sets when the page loads
  // NOTE: Am running tests using postman
  
  //this array is deliberately declared with "let".  While loop in line 30 re-sets variable to empty array
  //when there are duplicates
  let randomFiveProductIDs = [];
  
  const generateFiveRandomProductIDs = () => {
    for(let i = 0; i < 5; i++) {
      randomFiveProductIDs.push(Math.floor(Math.random() * 100) + 1);
    }
  }
  
  generateFiveRandomProductIDs();

  //confirm that randomFiveProductIds array has no duplicates
  while( new Set(randomFiveProductIDs).size !== 5) {
    randomFiveProductIDs = [];
    generateFiveRandomProductIDs();
  }

  let queryString = `SELECT * from products where (product_id = ${randomFiveProductIDs[0]}) OR (product_id = ${randomFiveProductIDs[1]}) OR (product_id = ${randomFiveProductIDs[2]}) OR (product_id = ${randomFiveProductIDs[3]}) OR (product_id = ${randomFiveProductIDs[4]});`;
  db.query(queryString, (err, result) => {
    if(err) {
      console.log('Error with GET request for five random products, error is: ', err);
    } else {
      console.log("Successful GET request for five random products");
      res.send(result);
    }
  });
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});