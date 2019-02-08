const data = require('./mockdata.js');
const db = require('./index.js');
console.log('data is ', data);

data.forEach(product=> {
    let queryStr = `INSERT INTO products (product_name, image_src, review_stars, review_count, price) VALUES ('${product.product_name}','${product.image_src}', '${product.review_stars}', '${product.review_count}', '${product.price}');`;
    db.query(queryStr, (err, result) => {
      if(err) {
          console.log('Error with insertion into database, err is: ', err)
      } else {
          console.log('Successful insertion');
      }
    })
})