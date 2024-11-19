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

async function italianRecipe() {
  const res = await fetch(`${url}&cuisine=Italian`);
  const data = await res.json();
  return data;
}

async function mexicanRecipe() {
  const res = await fetch(`${url}&cuisine=Mexican`);
  const data =- await res.json();
  return data;
}

async function chineseRecipe() {
  const res = await fetch(`${url}&cuisine=Chinese`);
  const data = await res.json();
  return data;
}

async function indianRecipe() {
  const res = await fetch(`${url}&cuisine=Indian`);
  const data = await res.json();
  return data;
}

async function japaneseRecipe() {
  const res = await fetch(`${url}&cuisine=Japanese`);
  const data = await res.json();
  return data;
}

async function mediterranianRecipe() {
  const res = await fetch(`${url}&cuisine=Mediterranean`);
  const data = await res.json();
  return data;
}

async function americanRecipe() {
  const res = await fetch(`${url}&cuisine=American`);
  const data = await res.json();
  return data;
}
