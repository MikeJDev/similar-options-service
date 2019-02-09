DROP DATABASE IF EXISTS fec;
CREATE DATABASE fec;
USE fec;

CREATE TABLE products (
  product_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name VARCHAR(500) NOT NULL,
  product_description VARCHAR(500) NOT NULL,
  image_src VARCHAR(500) NOT NULL,
  review_stars INT NOT NULL, 
  review_count INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);