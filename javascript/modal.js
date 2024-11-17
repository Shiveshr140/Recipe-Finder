////********************************** Modal windows for nav link

// create function to show/close modal window common for cards those have links
function createModal(triggerElement, contentHtml) {
  // Create modal elements
  const overlay = document.createElement("div");
  const modal = document.createElement("div");

  // Add necessary classes to the modal and overlay
  overlay.classList.add("overlay", "hidden");
  modal.classList.add("modal-card", "hidden");

  // Append modal and overlay to the body
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  // Set modal content dynamically
  modal.innerHTML = contentHtml;

  // Show the modal
  triggerElement.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  // Close modal on overlay click or close button click
  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  });

  const closeButton = modal.querySelector(".close-modal-card");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  }

  // Close modal on the "Ok" button click
  const okButton = modal.querySelector(".ok");
  if (okButton) {
    okButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  }
}

// Modal content for healthy recipes
const healthyRecipiesContent = `
  <div class="modal-card-header">
    <h3>
      <span>Seasonal Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
  </div>
  <h3> Diwali recipes </h3>
  <h3> Ramadan and Eid recipes </h3>
  <h3> Easter recipes </h3>
  <h3> Father's day </h3>
  <h3> Mother's day </h3>
  <h3> Christmas and New year recipes  </h3>
`;

// seasonal recipes link
const healthyRecipesLink = document.querySelector(".nav-healthy-recipies");
createModal(healthyRecipesLink, healthyRecipiesContent);

// Modal content for ingredients
const ingredientsContent = `
  <div class="modal-card-header">
    <h3>
      <span>Seasonal Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
</div>
  <h3> Diwali recipes </h3>
  <h3> Ramadan and Eid recipes </h3>
  <h3> Easter recipes </h3>
  <h3> Father's day </h3>
  <h3> Mother's day </h3>
  <h3> Christmas and New year recipes  </h3>
`;

// Ingredient  link
const ingredientLink = document.querySelector(".nav-ingredients");
createModal(ingredientLink, ingredientsContent);

// Modal content for
const seasonalContent = `
  <div class="modal-card-header">
    <h3>
      <span>Seasonal Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
</div>
  <h3> Diwali recipes </h3>
  <h3> Ramadan and Eid recipes </h3>
  <h3> Easter recipes </h3>
  <h3> Father's day </h3>
  <h3> Mother's day </h3>
  <h3> Christmas and New year recipes  </h3>
`;

// healthy recipes link
const seasonalLink = document.querySelector(".nav-seasonal");
createModal(seasonalLink, seasonalContent);
