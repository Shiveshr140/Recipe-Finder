// Function to initialize and display sidebar recipes
function displayIngredientRecipes() {
  const ingredientRecipesLinks = document.querySelectorAll(
    ".ingredient-links-item"
  );
  if (main && ingredientRecipesLinks) {
    const originalContent = main.innerHTML;
    ingredientRecipesLinks.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        const category = e.target.textContent;

        // Update main content area with new recipes
        main.innerHTML = `
              <div class="comman-recipe-header">
                <div class="comman-recipe-top"> 
                  <h2>${category} </h2>
                <button class="comman-back">Back</button>
                </div>
                <div class="comman-recipes-container"></div>
              </div>
            `;

        // Fetch and display recipes for the selected category
        await displayRecipesContent(category, IngredientsRecipeDetailsFromAPI);

        const backButton = main.querySelector(".comman-back");
        backButton.addEventListener("click", () => {
          // Restore the original content
          main.innerHTML = originalContent;

          // Reattach the event listener to "Sidebar Recipe Link"
          const restoredHealthyLink = main.querySelector(".ingredients-links");
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

// // Function to fetch and display recipes in the sidebar
// async function displayIngredientRecipesContent(category) {
//   try {
//     const recipes = await IngredientRecipeDetailsFromAPI(category);
//     const recipesContainer = document.querySelector(
//       ".comman-recipes-container"
//     );

//     // Clear any existing content in the container
//     recipesContainer.innerHTML = "";

//     // Handle empty recipe list
//     if (!recipes || recipes.length === 0) {
//       recipesContainer.innerHTML = `<p>No recipes found. Please try again later.</p>`;
//       return;
//     }

//     // Render recipe cards with details
//     recipes.forEach((recipe) => {
//       const recipeCard = document.createElement("div");
//       recipeCard.classList.add("comman-recipe-card");

//       // Populate recipe details
//       recipeCard.innerHTML = `
//               <img src="${recipe.image}" alt="${
//         recipe.title
//       }" class="comman-recipe-image" />
//               <div class="comman-details">
//                 <h3 class="comman-recipe-title">${recipe.title}</h3>
//                 <p class="comman-cooking-time"><strong>Cooking Time:</strong> ${
//                   recipe.readyInMinutes || "N/A"
//                 } mins</p>
//                 <p class="comman-difficulty"><strong>HealthScore:</strong> ${
//                   recipe.healthScore
//                 }</p>
//                 <p class="comman-ratings"><strong>Ratings:</strong> ${
//                   recipe.aggregateLikes || "N/A"
//                 }</p>
//                 <div class="comman-recipe-summary">
//                    <p>
//                    ${recipe.summary}
//                    </p>
//                 </div>
//                 <a href="${
//                   recipe.sourceUrl
//                 }" target="_blank" class="comman-recipe-link">View Full Recipe</a>
//               </div>
//             `;

//       recipesContainer.appendChild(recipeCard);
//     });
//   } catch (err) {
//     console.error("Error displaying recipes:", err);
//     document.querySelector(
//       ".ingredient-recipes-container"
//     ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
//   }
// }

displayIngredientRecipes();
