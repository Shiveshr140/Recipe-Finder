function displaySearchRecipes() {
  const searchInput = document.querySelector(".search");
  const main = document.querySelector("main");
  const recipesContainer = document.createElement("div");
  recipesContainer.classList.add("comman-recipes-container");
  let currentPage = 0;
  // Prevent duplicate API calls
  let isLoading = false;
  let hasMoreResults = true;

  if (searchInput && main) {
    const originalContent = main.innerHTML;

    searchInput.addEventListener("input", async (e) => {
      const query = e.target.value.trim();
      if (query.length < 4) return;

      currentPage = 0;
      hasMoreResults = true;
      recipesContainer.innerHTML = "";
      main.innerHTML = `
        <div class="comman-recipe-header">
          <div class="comman-recipe-top"> 
            <h2>Searching for "${query}"...</h2>
            <button class="comman-back">Back</button>
          </div>
        </div>
      `;

      main.appendChild(recipesContainer);

      const recipes = await SearchRecipeDetailsFromAPI(query, currentPage);
      displaySearchRecipesContent(recipes);

      const backButton = document.querySelector(".comman-back");
      if (backButton) {
        backButton.addEventListener("click", () => {
          main.innerHTML = originalContent;
        });
      }

      window.addEventListener("scroll", async () => {
        if (
          window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 500 &&
          !isLoading &&
          hasMoreResults
        ) {
          isLoading = true;
          const loader = document.createElement("div");
          loader.classList.add("loading-indicator");
          loader.innerHTML = "Loading more recipes...";
          recipesContainer.appendChild(loader);

          currentPage += 1;
          const moreRecipes = await SearchRecipeDetailsFromAPI(
            query,
            currentPage
          );
          if (moreRecipes.length === 0) {
            hasMoreResults = false;
          } else {
            displaySearchRecipesContent(moreRecipes);
          }

          isLoading = false;
          recipesContainer.removeChild(loader);
        }
      });
    });
  }
}

async function displaySearchRecipesContent(recipes) {
  const recipesContainer = document.querySelector(".comman-recipes-container");

  // // Only clear the container when starting a new search
  // if (currentPage === 0) {
  //   recipesContainer.innerHTML = ""; // Clear previous search results
  // }

  if (!recipes || recipes.length === 0) {
    recipesContainer.innerHTML = `<p>No recipes found. Please try again later.</p>`;
    return;
  }

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("comman-recipe-card");

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
            recipe.healthScore || "N/A"
          }</p>
          <p class="comman-ratings"><strong>Ratings:</strong> ${
            recipe.aggregateLikes || "N/A"
          }</p>
          <div class="comman-recipe-summary">
            <p>${recipe.summary}</p>
          </div>
          <a href="${
            recipe.sourceUrl
          }" target="_blank" class="comman-recipe-link">View Full Recipe</a>
        </div>
      `;

    recipesContainer.appendChild(recipeCard);
  });
}

displaySearchRecipes();
