const products = [
  { name: "Gold Star", price: 30 },
  { name: "Mushroom", price: 50 },
  { name: "Green Shell", price: 10 },
  { name: "Banana Skin", price: 5 },
  { name: "Red Shell", price: 40 },
];

// const filteredProduct = products.filter((product) => product.price > 20);

// const promos = filteredProduct.map((product) => {
//   return `The ${product.name} has price NRs. ${product.price / 2}`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `The ${product.name} has price NRs. ${product.price / 2}`);
console.log(promos);
