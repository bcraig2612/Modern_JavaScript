// *** *** *** *** *** *** SECTION 16 DATABASES (FIREBASE) *** *** *** *** *** ***
// *** *** *** *** *** *** NoSQL Databases *** *** *** *** *** ***
// *** *** *** *** *** *** Firebase & Firestone *** *** *** *** *** ***
// Storing Data:
// Websites work with data: Blog posts, Todos, Comments, User Info, Scores, etc.
//We can store this data in a database: Firebase by Google
// We can use SQL databases or NoSQL databases
// SQL: Tables --> Rows --> Columns
// NoSQL: Collections --> Documents --> Properties

// *** *** *** *** *** *** Connecting To Firestone *** *** *** *** *** ***
// *** *** *** *** *** *** Getting Collections *** *** *** *** *** ***
// *** *** *** *** *** *** Saving Documents *** *** *** *** *** ***
// *** *** *** *** *** *** Deleting Documents *** *** *** *** *** ***
// *** *** *** *** *** *** Real-Time Listeners *** *** *** *** *** ***
// *** *** *** *** *** *** Unsubscribing *** *** *** *** *** ***

const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
  list.innerHTML += html;
};

const deleteRecipe = id => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach(recipe => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// get documents
const unsubscribe = db.collection("recipes").onSnapshot(snapshot => {
  //   console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    console.log(doc);
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
form.addEventListener("submit", event => {
  event.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch(error => {
      console.log(error);
    });
});

// deleting data
list.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.parentElement.getAttribute("data-id");
    // console.log(id);
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
      });
  }
});

// unsubscribe from database changes (the added and deleted items are still happening, we just don't see it real time on UI anymore)
button.addEventListener("click", () => {
  unsubscribe();
  console.log("Unsubscribed from collection changes");
});
