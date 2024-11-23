(function() {
    const sidebarRecipeList = document.querySelector(".sidebar-recipes-list");
    const main = document.querySelector("main"); 
    
    // Check if originalContent is already defined, and if not, define it
    if (!window.originalContent) {
      window.originalContent = main.innerHTML; 
    }
    
    // Attach event listeners to the sidebar
    function attachSidebarEventListeners() {
      sidebarRecipeList.removeEventListener("click", sidebarClickHandler);
      sidebarRecipeList.addEventListener("click", sidebarClickHandler);
    }
  
    // Handle clicks on sidebar recipe links
    function sidebarClickHandler(event) {
      event.preventDefault(); // Prevent page refresh
      const target = event.target; // Identifying the clicked element
  
      if (target.tagName === "A") {
        const category = target.textContent.trim();
        console.log(`Fetching recipes for category: ${category}`);
  
        // Replace main content with recipe display template
        main.innerHTML = `
          <div class="discover-more-header"> 
            <a>Hello, these are ${category} recipes you're looking for!</a>
            <button class="discover-back">Back</button>
            <div class="discover-recipes-container"></div>
          </div>
        `;
        // Display recipes for the selected category
        displayRecipes(category);
  
        // Handle the "Back" button click
        const backButton = main.querySelector(".discover-back");
        backButton.addEventListener("click", handleBackButton);
      }
    }
  
    // Handle the "Back" button logic
    function handleBackButton() {
      main.innerHTML = window.originalContent; // Restore the original content
      attachSidebarEventListeners(); // Reattach sidebar event listeners
    }
  
    // Fetch and display recipes for a category
    async function displayRecipes(category) {
      try {
        // Replace this with your actual fetch function
        const recipes = await fetchRecipes(category); 
        const recipesContainer = main.querySelector(".discover-recipes-container");
  
        // Check if recipes are available
        if (!recipes || recipes.length === 0) {
          recipesContainer.innerHTML = `<p>No recipes found for ${category}.</p>`;
          return;
        }
  
        // Render recipe cards
        recipes.forEach((recipe) => {
          const recipeCard = document.createElement("div");
          recipeCard.classList.add("discover-recipe-card");
  
          recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="discover-recipe-image"/>
            <h3 class="discover-recipe-title">${recipe.title}</h3>
            <p class="discover-recipe-summary">${recipe.summary || "No description available."}</p>
          `;
  
          recipesContainer.appendChild(recipeCard);
        });
      } catch (err) {
        console.error("Error displaying recipes:", err);
        main.querySelector(
          ".discover-recipes-container"
        ).innerHTML = `<p>Failed to load recipes. Please try again later.</p>`;
      }
    }
  
  
    // Attach event listeners initially
    attachSidebarEventListeners();
  })();
  