//import React from 'react';

//import ProductList from "../components/productList.jsx";

const ProductList = require('/../components/productList.jsx')

console.log("we are in testing")
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});