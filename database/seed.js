const db = require("./index.js");
const mongoose = require("mongoose");
const faker = require("faker");

const productSchema = mongoose.Schema({
  product_name: String,
  image: String,
  price: String
});


let Product = mongoose.model("Product", productSchema);

let name = faker.commerce.productName();
let image = faker.image.imageUrl();
let price = faker.commerce.price();

let item = new Product({
  product_name: `${name}`,
  image: `${image}`,
  price: `$${price}`
});

async function seed(item) {
  for (let i = 0; i < 100000; i++) {
    await item
      .save()
      .then(success => {
        console.log("item is added", success);
      })
      .catch(err => {
        console.log("err:", err);
      });
  }
}
seed(item);

// db.Product.remove({})
//   .then(() => {
//     db.Product.insertMany(data)
//     .then((success) => {
//       console.log('successfully seeded db')
//     })
//   }).catch(err => console.log('error'))