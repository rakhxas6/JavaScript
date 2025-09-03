const list = document.querySelector("ul");

const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
console.log(recipe.created_at);
  let html = `
    <li>
    <div>${recipe.title}</div>
    <div>${time}</div>
    </li>`;

  list.innerHTML += html;
  console.log(html);
};

db.collection("recipes")
  .get()
  .then((snapshot) => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.error("Error fetching the collection", err);
  });

//  adding data to the db
db.collection("recipes")
  .get()
  .then((snapshot) => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.error("Error fetching the collection", err);
  });

