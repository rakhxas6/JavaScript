const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScored = scores.filter((score) => {
//     return score > 20;
//     //non destructive it doesnot have effect on the real array.
// });

// console.log(filteredScored)

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

// const filteredPremiumUsers = users.filter((user) => {
//     return user.premium
//     //it only returns true data
// })

// short-hand technique
const filteredPremiumUsers = users.filter((user) => user.premium);
console.log(filteredPremiumUsers);
