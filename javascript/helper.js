//  return array/obj from these function so that later we can use these
// arr/obj should have [{"id": , "title": , "image": "", "summary": "", "instructions": "" },]  or other necessary things if availabele

const API_KEY = "10b626f296dd42cca1d8be206ee4b6a6";
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

//****************************************************************** For categories
async function categories(category) {
  const res = await fetch(`${url}&sort=${category}`);
  const data = await res.json();
  return data;
}

// console.log(popular());

async function cheap() {
  const res = await fetch(`${url}&sort=price&sortDirection=asc`);
  const data = await res.json();
  return data;
}

async function vegetarian() {
  const res = await fetch(`${url}&diet=vegetarian`);
  const data = await res.json();
  return data;
}

async function glutenFreen() {
  const res = await fetch(`${url}&intolerances=gluten`);
  const data = await res.json();
  return data;
}

//***************************************************************** Sidebar Recipes

async function breakfastRecipes() {
  const res = await fetch(`${url}&type=breakfast`);
  const data = await res.json();
  return data;
}

async function lunchRecipe() {
  const res = await fetch(`${url}&type=main course`);
  const data = await res.json();
  return data;
}

async function dinnerRecipe() {

}

async function desserts() {
  const res = await fetch(`${url}&type=dessert`);
  const data = await res.json();
  return data;
}

async function snacks() {
  const res = await fetch(`${url}&type=snack`);
  const data = await res.json();
  return data;
}

async function LowCarbRecipe() {
  const res = await fetch(`${url}&sort=carb&sortDirection=asc`);
  const data = await res.json();
  return data;
}

async function ketoRecipe() {}

async function fetchRecipesByCuisine(cuisine) {
  try {
    const res = await fetch(`${url}&cuisine=${cuisine}`);
    if (!res.ok) throw new Error(`Failed to fetch recipes: ${res.status}`);
    const data = await res.json();
    console.log(data);
    return data.results;
  } catch (err) {
    console.error(err);
  }
}

////**************************************************** Discover-more

async function discoverMoreRecipes() {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=8`
    );
    if (!res.ok) throw new Error(`Failed to fetch recipes: ${res.status}`);
    const data = await res.json();
    return data.recipes; // Corrected to match Spoonacular API response
  } catch (err) {
    console.error(err);
    return []; // Return an empty array in case of an error
  }
}
