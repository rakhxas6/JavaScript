const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "buy some bread", author: "luigi" },
];

//console.log(JSON.stringify(todos))

// changing data from array to string
localStorage.setItem("todos", JSON.stringify(todos));

const data = localStorage.getItem("todos");

// changing data from string to array
console.log(JSON.parse(data));
