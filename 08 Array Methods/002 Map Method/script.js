const prices = [20, 10, 20, 25, 15, 40, 80, 5];

const salesPrices = prices.map((price) => price / 2);

console.log(salesPrices);

const products = [
  { name: "Gold Star", price: 20 },
  { name: "Mushroom", price: 40 },
  { name: "Green Shells", price: 30 },
  { name: "Banana Skin", price: 10 },
  { name: "Red Shells", price: 50 },
];

const saleProduct = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProduct);
