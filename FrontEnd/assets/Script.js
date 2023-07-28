// Etape 1 => récupérer toutes les catégories
const galery = document.getElementsByClassName("gallery");
const url = 'http://localhost:5678/api/';
const apiWorks = url + "works";
const apiCategories = url +"categories";

async function getAllCategories () 
{
    const categories = await fetch(apiCategories)
    .then(async function (c){
      return c.json();
    });
    return categories;
}

// etape 2 => formatage json vers html 

function formatCategories (categoriesToFormat)
{
    const buttons = document.getElementById ("buttons");
  for (const categoryToFormat of categoriesToFormat) 
    {

    }    
}      