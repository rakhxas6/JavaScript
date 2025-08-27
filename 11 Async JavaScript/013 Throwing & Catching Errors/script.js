// async and await

const getTodos = async () => {
  const response = await fetch("todos/luigis.json");

  if (response.status !== 200) {
    throw new Error("Cannot fetch the data!!");
  }
  const data = await response.json();
  return data;
}; //it returns promise

console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("Resolved:", data))
  .catch((err) => {
    // const err = throw new Error('It is not working')
    console.log("rejected", err.message);
  });

console.log(3);
console.log(4);
