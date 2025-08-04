//reduce method
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const filterScored = scores.reduce((accumulator,current) => {
//   if (current > 50) {
//     accumulator++
//   }
//   return accumulator;
// },0);

// console.log(filterScored);

const scores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 10 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 0 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 80 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 100 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 20 },
  { player: "crystal", score: 60 },
];

const marioResult = scores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);

const crystalResult = scores.reduce((acc, curr) => {
  if (curr.player === "crystal") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(
  `Mario total score is ${marioResult} points, Crystal total score is ${crystalResult} points`
);
