const db = require("./index.js");
const mongoose = require("mongoose");
const faker = require("faker");

const productSchema = mongoose.Schema({
  // _id: Number,
  product_name: String,
  image: String,
  price: Number
});

let Product = mongoose.model("Product", productSchema);

async function seed() {
  for (let i = 0; i < 10000000; i++) {
    let name = faker.commerce.productName();
    let image = faker.image.imageUrl();
    let price = faker.commerce.price();

    let item = new Product({
      product_name: `${name}`,
      image: `${image}`,
      price: `${price}`
    });

    await item
      .save()
      .then(success => {})
      .catch(err => {});
  }
}
seed();

module.exports.Product = Product
//mongoexport --db sdc --products --csv --type=csv --out newproducts.csv --fields product_name,image,price

// mongoimport --db sdc --collection products --type csv --file /Users/mikejanes/Desktop/prodwithnumbers.csv --headerline --numInsertionWorkers 8