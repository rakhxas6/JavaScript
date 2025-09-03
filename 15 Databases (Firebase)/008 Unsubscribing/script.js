const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("#unsubscribe");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  // console.log(recipe.created_at);
  let html = `
      <li data-id="${id}" class="d-flex justify-content-between align-items-center">
      <span>${recipe.title}</span>
      <span>${time}</span>
      <button class="btn btn-danger btn-sm my-2">Delete</button>
      </li>
    `;

  list.innerHTML += html;
  // console.log(html);
};

// delete recipe
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};


// real-time listener
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed'){
      deleteRecipe(doc.id);
    }
  });
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

//! deleting item from the db  with event delegation
list.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    // console.log(id)
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => console.log("Recipe Deleted"))
      .catch((err) => console.log("Error deleting recipe"));
  }
});


// unsub from the database changes

button.addEventListener('click', ()=> {
  unsub()
  console.log('Unsubscribed from the collection changes')
})