// Function pour récupérer toutes les catégories
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

// Récupère tous les works
async function getAllWorks() {
  try {
    const response = await fetch(apiWorks);
    const works = await response.json();
    return works;
  } catch (error) {
    console.error("Erreur lors de la récupération des works :", error);
    return [];
  }
}

// Fonction pour afficher les boutons des catégories
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

// Fonction pour afficher tous les works
async function displayAllWorks() {
  const allGallery = document.getElementsByClassName("gallery")[0];
  const works = await getAllWorks();
  
  for (const galleryWork of works) {
    allGallery.insertAdjacentHTML("beforeend",
      `<figure data-id="${galleryWork.categoryId}">
        <img
          src="${galleryWork.imageUrl}"
          alt="${galleryWork.title}" />
        <figcaption>${galleryWork.title}</figcaption>
      </figure>`
    );
  }
}

// Variables
const apiURL = 'http://localhost:5678/api/';
const apiWorks = apiURL + "works";
const apiCategories = apiURL + "categories";

// Point d'entrée
async function initialize() {
  try {
    const categories = await getAllCategories();
    displayButtons(categories);
    await displayAllWorks();
  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}

initialize();
