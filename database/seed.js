const db = require("./index.js");
const mongoose = require("mongoose");
const faker = require("faker");

const productSchema = mongoose.Schema({
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

//mongoexport --db sdc --products --csv --type=csv --out newproducts.csv --fields product_name,image,price