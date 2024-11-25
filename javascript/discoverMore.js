// Save the original content for restoring later
function discoverMore() {
  const discoverMore = document.querySelector(".discover-more");
  if (main && discoverMore) {
    const originalContent = main.innerHTML;
    discoverMore.addEventListener("click", async () => {
      // Clear the main element and insert the "Discover More" content
      main.innerHTML = `
        <div class="discover-more-header"> 
          <a> Hello, explore our amazing recipes! </a>
          <button class="discover-back">Back</button>
          <div class="discover-recipes-container"></div>
        </div>
      `;

      // Display recipes
      await displayRecipes();

      // Add event listener for the "Back" button
      const backButton = main.querySelector(".discover-back");
      backButton.addEventListener("click", (e) => {
        e.stopPropagation();
        // Restore the original content
        main.innerHTML = originalContent;

        // Reattach the event listener to "Discover More" (because content is restored)
        const restoredDiscoverMore = main.querySelector(".discover-more");
        restoredDiscoverMore.addEventListener("click", () => {
          // Trigger the same logic when clicking "Discover More" again
          discoverMore.click();
        });
      });
    });
  }
}

async function displayRecipes() {
  try {
    const recipes = await discoverMoreRecipes();
    console.log(recipes);
    const recipesContainer = main.querySelector(".discover-recipes-container");

    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("discover-recipe-card");

      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="discover-recipe-image"/>
        <h3 class="discover-recipe-title">${recipe.title}</h3>
        <p class="discover-recipe-summary">${recipe.summary}</p>
        <a href="${recipe.sourceUrl}" target="_blank" class="discover-recipe-link">View Recipe</a>
      `;

      recipesContainer.appendChild(recipeCard);
    });
  } catch (err) {
    console.error("Error displaying recipes:", err);
    main.querySelector(
      ".recipes-container"
    ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
  }
}

discoverMore();

module.exports = { discoverMore, displayRecipes };
