// Function => récupérer toutes les catégories
async function getAllCategories() {
  const result = await fetch(apiCategories).then(async function (c){
    return c.json();
  });
  return result;
}

//function Afficher les boutons
function displayButtons(categories) {
  const buttons = document.getElementById("buttons");
  console.log(categories);
  for (const category of categories) {
    buttons.insertAdjacentHTML("beforeend",
      `<button class="button" data-id="${category.id}">
        ${category.name}
        </button>
    `) 
  }
  
} 
//variables
const galery = document.getElementsByClassName("gallery");
const url = 'http://localhost:5678/api/';
const apiWorks = url + "works";
const apiCategories = url + "categories";
//________________________________________

displayButtons(getAllCategories()); 
