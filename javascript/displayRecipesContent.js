// Function to fetch and display recipes in main element
async function displayRecipesContent(category, fetchFn) {
  try {
    const recipes = await fetchFn(category); // Fetch recipes by category
    const recipesContainer = document.querySelector(
      ".comman-recipes-container"
    );

    // Clear any existing content in the container
    recipesContainer.innerHTML = "";

    // Handle empty recipe list
    if (!recipes || recipes.length === 0) {
      recipesContainer.innerHTML = `<p>No recipes found. Please try again later.</p>`;
      return;
    }

    // Render recipe cards with details
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("comman-recipe-card");

      // Populate recipe details
      recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${
        recipe.title
      }" class="comman-recipe-image" />
            <div class="comman-details">
              <h3 class="comman-recipe-title">${recipe.title}</h3>
              <p class="comman-cooking-time"><strong>Cooking Time:</strong> ${
                recipe.readyInMinutes || "N/A"
              } mins</p>
              <p class="comman-difficulty"><strong>HealthScore:</strong> ${
                recipe.healthScore
              }</p>
              <p class="comman-ratings"><strong>Ratings:</strong> ${
                recipe.aggregateLikes || "N/A"
              }</p>
              <div class="comman-recipe-summary"> 
                 <p> 
                 ${recipe.summary}
                 </p>
              </div>
              <a href="${
                recipe.sourceUrl
              }" target="_blank" class="comman-recipe-link">View Full Recipe</a>
            </div>
          `;

      recipesContainer.appendChild(recipeCard);
    });
  } catch (err) {
    console.error("Error displaying recipes:", err);
    document.querySelector(
      ".comman-recipes-container"
    ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
  }
}
