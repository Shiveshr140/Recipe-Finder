//  return array/obj from these function so that later we can use these
// arr/obj should have [{"id": , "title": , "image": "", "summary": "", "instructions": "" },]  or other necessary things if availabele

// apikey 1
const API_KEY = "10b626f296dd42cca1d8be206ee4b6a6";

// apikey 2
// const API_KEY = "ebc06cd8aab14b2d8cb6e720691d14a5";
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

//****************************************************************** For categories
async function categoriesRecipes(category) {
  try {
    const categoryLowerCase = category.toLowerCase();

    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&sort=${categoryLowerCase}&number=20&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok)
      throw new Error(
        `Failed to fetch recipes for ${categoryLowerCase}: ${res.status}`
      );
    const data = await res.json();
    console.log(`${category}`, data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching recipes for ${category}:`, err.message);
    return [];
  }
}

// console.log(categoriesRecipes("cheap"));

////**************************************************** Discover-more
//// DO NOT TOUCH THIS
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

// Sidebar Recipes
async function fetchSidebarRecipes(category) {
  try {
    const categoryLowerCase = category.toLowerCase();

    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${categoryLowerCase}&number=20&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok)
      throw new Error(
        `Failed to fetch recipes for ${categoryLowerCase}: ${res.status}`
      );
    const data = await res.json();
    console.log("breakfast", data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching recipes for ${category}:`, err.message);
    return [];
  }
}

// console.log(fetchSidebarRecipes("breakfast"));

//**** Healthy recipes

async function HealthyRecipeDetailsFromAPI(recipeName) {
  try {
    const recipeLowerCase = recipeName.toLowerCase();
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${recipeLowerCase}&number=10&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch details for ${recipeName}: ${res.status}`
      );
    }

    const data = await res.json();
    console.log("healthy", data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching details for ${recipeName}:`, err.message);
    return null; // Return null in case of an error
  }
}

// console.log(HealthyRecipeDetailsFromAPI("Grilled Chicken Salad"));

////********************* Seasonal

async function SeasonalRecipeDetailsFromAPI(category) {
  try {
    const categoryLowerCase = category.toLowerCase();
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&festive=${categoryLowerCase}&number=20&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch recipes for ${category}: ${res.status}`);
    }

    const data = await res.json();
    console.log(`${category}`, data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching recipes for ${category}:`, err.message);
    return null;
  }
}

// console.log(SeasonalRecipeDetailsFromAPI("ramadan and eid"));

////********************** Ingredients and search bar

// Fetch recipe details for a single ingredient
async function IngredientsRecipeDetailsFromAPI(ingredient) {
  try {
    const ingredientLowerCase = ingredient.toLowerCase();
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${ingredientLowerCase}&number=20&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch recipes for ${ingredient}: ${res.status}`
      );
    }

    const data = await res.json();
    console.log(`Recipes for ${ingredient}:`, data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching recipes for ${ingredient}:`, err.message);
    return null;
  }
}

// console.log(IngredientsRecipeDetailsFromAPI("Tomato"));

async function SearchRecipeDetailsFromAPI(query, page = 0) {
  try {
    const offset = page * 10;
    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&offset=${offset}&number=10&addRecipeInformation=true`;

    const res = await fetch(endpoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch recipes for ${query}: ${res.status}`);
    }

    const data = await res.json();
    console.log(`Recipes for "${query}" (Page ${page + 1}):`, data.results);

    return data.results;
  } catch (err) {
    console.error(`Error fetching recipes for "${query}":`, err.message);
    return [];
  }
}
