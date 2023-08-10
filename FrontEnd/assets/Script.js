// Function => récupérer toutes les catégories
async function getAllCategories() {
  try {
    const response = await fetch(apiCategories);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    return [];
  }
}

// function Afficher les boutons
function displayButtons(categories) {
  const buttonsContainer = document.getElementById("buttons");
  for (const category of categories) {
    buttonsContainer.insertAdjacentHTML("beforeend",
      `<button class="button" data-id="${category.id}">
        ${category.name}
      </button>`
    );
  }
}

//function afficher tout les works :
function displayAllWorks(works) {
  const allGallery = document.getElementsByClassName("gallery")[0]; 
  for (const galleryWork of works) {
    allGallery.insertAdjacentHTML("beforeend",
      `<figure data-id="${galleryWork.categoryId}">
        <img
          src="${galleryWork.imageUrl}"
        alt="${galleryWork.title}" />
        <figcaption>${galleryWork.title}"</figcaption>
      </figure>
    `)
    
  }

}

// Variables
const apiURL = 'http://localhost:5678/api/';
const apiWorks = apiURL + "works";
const apiCategories = apiURL + "categories";

// Point d'entrée
async function initialize() {
  const categories = await getAllCategories();
  displayButtons(categories);
}

initialize();
