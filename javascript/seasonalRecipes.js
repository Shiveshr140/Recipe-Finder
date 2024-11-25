// Function to initialize and display sidebar recipes
function displayHealthyRecipes() {
  const seasonalRecipesLinks = document.querySelectorAll(".recipe-link");
  if (main && seasonalRecipesLinks) {
    const originalContent = main.innerHTML;
    seasonalRecipesLinks.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        const category = e.target.textContent;

        // Update main content area with new recipes
        main.innerHTML = `
            <div class="seasonal-recipe-header">
              <div class="seasonal-recipe-top"> 
                <h2>${category} </h2>
              <button class="seasonal-back">Back</button>
              </div>
              <div class="seasonal-recipes-container"></div>
            </div>
          `;

        // Fetch and display recipes for the selected category
        await displaySeasonalRecipesContent(category);

        const backButton = main.querySelector(".seasonal-back");
        backButton.addEventListener("click", () => {
          // Restore the original content
          main.innerHTML = originalContent;

          // Reattach the event listener to "Sidebar Recipe Link"
          const restoredHealthyLink = main.querySelector(
            ".seasonal-recipes-link"
          );
          if (restoredHealthyLink) {
            restoredHealthyLink.addEventListener("click", async () => {
              restoredHealthyLink.click();
            });
          }
        });
      });
    });
  }
}

// Function to fetch and display recipes in the sidebar
async function displaySeasonalRecipesContent(category) {
  try {
    const recipes = await SeasonalRecipeDetailsFromAPI(category);
    const recipesContainer = document.querySelector(
      ".seasonal-recipes-container"
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
      recipeCard.classList.add("seasonal-recipe-card");

      // Populate recipe details
      recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${
        recipe.title
      }" class="healthy-recipe-image" />
            <div class="seasonal-details">
              <h3 class="seasonal-recipe-title">${recipe.title}</h3>
              <p class="seasonal-cooking-time"><strong>Cooking Time:</strong> ${
                recipe.readyInMinutes || "N/A"
              } mins</p>
              <p class="seasonal-difficulty"><strong>HealthScore:</strong> ${
                recipe.healthScore
              }</p>
              <p class="seasonal-ratings"><strong>Ratings:</strong> ${
                recipe.aggregateLikes || "N/A"
              }</p>
              <div class="seasonal-recipe-summary"> 
                 <p> 
                 ${recipe.summary}
                 </p>
              </div>
              <a href="${
                recipe.sourceUrl
              }" target="_blank" class="seasonal-recipe-link">View Full Recipe</a>
            </div>
          `;

      recipesContainer.appendChild(recipeCard);
    });
  } catch (err) {
    console.error("Error displaying recipes:", err);
    document.querySelector(
      ".seasonal-recipes-container"
    ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
  }
}

displayHealthyRecipes();
