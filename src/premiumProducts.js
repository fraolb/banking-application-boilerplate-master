const products = [
  ["gucci round bucklet belt", 400],
  ["gucci round bucklet belt", 450],
  ["gucci round bucklet belt", 300],
  ["smiley tshirt", 500],
  ["smiley tshirt", 50],
  ["smiley tshirt", 250],
  ["shinie nail paint", 100],
];

const premiumProducts = products.filter((product) => product[1] > 300);

console.log(premiumProducts);

const filteredProducts = products.filter((product) => product[1] < 300);

const discountedProducts = filteredProducts.map((product) => [
  product[0],
  product[1] - (product[1] * 10) / 100,
]);
console.log(discountedProducts);

let productStock = products.reduce((stocks, product) => {
  let stockItem = stocks.find((stock) => stock[0] == product[0]);
  if (!stockItem) stocks.push([product[0], 1]);
  else ++stockItem[1];
}, []);

console.log(productStock);
