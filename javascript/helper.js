//  return array/obj from these function so that later we can use these
// arr/obj should have [{"id": , "title": , "image": "", "summary": "", "instructions": "" },]  or other necessary things if availabele

const API_KEY = "10b626f296dd42cca1d8be206ee4b6a6";
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

//********************************* For categories
async function popular() {
  const res = await fetch(`${url}&sort=popularity`);
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

async function dinnerRecipe() {}

async function desserts() {}

async function snacks() {}

async function LowCarbRecipe() {}

async function ketoRecipe() {}

async function italianRecipe() {}

async function mexicanRecipe() {}

async function chineseRecipe() {}

async function indianRecipe() {}

async function japaneseRecipe() {}

async function mediterranianRecipe() {}

async function americanRecipe() {}
