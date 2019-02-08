const mysql = require('mysql');
const config = require('./config.js');
const connection = mysql.createConnection(config);

connection.connect(err => {
    if(err) {
        console.log('Error with DB connections')
      } else {
        console.log('We are connected to db!')
      }
});

module.exports = connection;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/3000', {useNewUrlParser: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('We are connected to mongo mongo mongo!')
// });

// const productSchema = new.mongoose.Schema({
//     product_id: Number,
//     product_name: String,
//     image_src: String, 
//     review_stars: Number,
//     review_count: Number,
//     price: Number
// });

// let Product = mongoose.model('Product', productSchema);
// // an instance of a model is called a document

// const sample = [
//     {product_id: 1, product_name: 'hammer', image_src: 'testurl1', review_stars: 3, review_count: 40, price: 20},
//     {product_id: 2, product_name: 'jack hammer', image_src: 'testurl2', review_stars: 4, review_count: 20, price: 30},
//     {product_id: 3, product_name: 'saw', image_src: 'testurl3', review_stars: 5, review_count: 10, price: 40}
// ]

// const insert = (record, cb) => {
    
    
//     //create record
//     //.save on that record
//     //db.save()
// }
// // .save, save records, takes callback
// // test with object

// module.export = db;
