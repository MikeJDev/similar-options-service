const mongoose = require('mongoose');
const fake = require('fakegoose')
const faker = require('faker')

mongoose.connect('mongodb://localhost:27017/sdc', {useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('We are connected to mongo mongo mongo!')
});

// const productSchema = mongoose.Schema({
//   productName: String,
//   image: String,
//   price: String
// });

// let Product = mongoose.model('Product', productSchema);

// module.exports.Product = Product