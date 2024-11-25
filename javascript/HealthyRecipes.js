// Function to initialize and display sidebar recipes
function displayHealthyRecipes() {
  const healthyRecipesLinks = document.querySelectorAll(".recipe-link");
  if (main && healthyRecipesLinks) {
    const originalContent = main.innerHTML;
    healthyRecipesLinks.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        const category = e.target.textContent;

        // Update main content area with new recipes
        main.innerHTML = `
          <div class="healthy-recipe-header">
            <div class="healthy-recipe-top"> 
              <h2>${category} </h2>
            <button class="healthy-back">Back</button>
            </div>
            <div class="healthy-recipes-container"></div>
          </div>
        `;

        // Fetch and display recipes for the selected category
        await displayHealthyRecipesContent(category);

        const backButton = main.querySelector(".healthy-back");
        backButton.addEventListener("click", () => {
          // Restore the original content
          main.innerHTML = originalContent;

          // Reattach the event listener to "Sidebar Recipe Link"
          const restoredHealthyLink = main.querySelector(
            ".healthy-recipes-link"
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
async function displayHealthyRecipesContent(category) {
  try {
    const recipes = await HealthyRecipeDetailsFromAPI(category); // Fetch recipes by category
    const recipesContainer = document.querySelector(
      ".healthy-recipes-container"
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
      recipeCard.classList.add("healthy-recipe-card");

      // Populate recipe details
      recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${
        recipe.title
      }" class="healthy-recipe-image" />
          <div class="healthy-details">
            <h3 class="healthy-recipe-title">${recipe.title}</h3>
            <p class="healthy-cooking-time"><strong>Cooking Time:</strong> ${
              recipe.readyInMinutes || "N/A"
            } mins</p>
            <p class="healthy-difficulty"><strong>HealthScore:</strong> ${
              recipe.healthScore
            }</p>
            <p class="healthy-ratings"><strong>Ratings:</strong> ${
              recipe.aggregateLikes || "N/A"
            }</p>
            <div class="healthy-recipe-summary"> 
               <p> 
               ${recipe.summary}
               </p>
            </div>
            <a href="${
              recipe.sourceUrl
            }" target="_blank" class="healthy-recipe-link">View Full Recipe</a>
          </div>
        `;

      recipesContainer.appendChild(recipeCard);
    });
  } catch (err) {
    console.error("Error displaying recipes:", err);
    document.querySelector(
      ".healthy-recipes-container"
    ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
  }
}

displayHealthyRecipes();
