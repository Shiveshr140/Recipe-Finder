//  return array/obj from these function so that later we can use these
// arr/obj should have [{"id": , "title": , "image": "", "summary": "", "instructions": "" },]  or other necessary things if availabele

const API_KEY = "10b626f296dd42cca1d8be206ee4b6a6";
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

//****************************************************************** For categories
async function categories(category) {
  const res = await fetch(`${url}&sort=${category}`);
  const data = await res.json();
  console.log(data);
  return data;
}

// console.log(categories("popular"));

//***************************************************************** Sidebar Recipes
