//example 1 - Sorting strings
// const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];
// const alphabeticalOrder = names.sort() //has inbuilt functions
// console.log(alphabeticalOrder)
// console.log(names.reverse())

//destructive method
// console.log(names)

//example 2 - Sorting Numbers
const prices = [20, 10, 20, 25, 15, 40, 80, 5];
prices.sort((a, b) => a - b);
console.log(prices);
console.log(prices.reverse());

// console.log(prices.sort()) //only looks at first value so incorrect
// console.log(prices.reverse())

// example 3 sorting objects
const players = [
  { name: "mario", score: 20 },
  { name: "shaun", score: 70 },
  { name: "chun-li", score: 50 },
  { name: "yoshi", score: 30 },
  { name: "luigi", score: 10 },
];

// const sortedScore = players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1; // a comes before b
//   } else if (b.score > a.score) {
//     return 1; // b comes before a
//   } else {
//     return 0; // keep original order
//   }
// });
// console.log(sortedScore)

// ? Shorthand
players.sort((a, b) => b.score - a.score);
console.log(players);
