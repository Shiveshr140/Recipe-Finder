// Function to initialize and display sidebar recipes
function displayHealthyRecipes() {
  const healthyRecipesLinks = document.querySelectorAll(".healthy-link-item");
  if (main && healthyRecipesLinks) {
    const originalContent = main.innerHTML;
    healthyRecipesLinks.forEach((link) => {
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
        await displayRecipesContent(category, HealthyRecipeDetailsFromAPI);

        const backButton = main.querySelector(".comman-back");
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

displayHealthyRecipes();
