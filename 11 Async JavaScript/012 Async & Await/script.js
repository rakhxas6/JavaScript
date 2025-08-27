// async and await

const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  const data = await response.json();
  return data;
}; //it returns promise

console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("Resolved:", data))
  .catch((err) => console.log(err));

console.log(3);
console.log(4);

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("Promise Rejected", err);
//   });
