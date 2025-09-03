const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  // console.log(recipe.created_at);
  let html = `
      <li  class="d-flex justify-content-between align-items-center">
      <span>${recipe.title}</span>
      <span>${time}</span>
      <button class="btn btn-danger btn-sm my-2">Delete</button>
      </li>
    `;

  list.innerHTML += html;
  // console.log(html);
};

db.collection("recipes")
  .get()
  .then((snapshot) => {
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach((doc) => {
      // console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch((err) => {
    console.error("Error fetching the collection", err);
  });

//  adding data to the db

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added", recipe);
    })
    .catch((err) => console.log(err));
});


