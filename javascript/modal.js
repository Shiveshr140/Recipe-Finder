////********************************** Modal windows for nav link

// create function to show/close modal window common for cards those have links
function createModal(triggerElement, contentHtml, modalId) {
  // Create modal elements
  const overlay = document.createElement("div");
  const modal = document.createElement("div");

  // Add necessary classes to the modal and overlay, ids are also added we need target unique modal specially in case of handling links click in individual modals
  overlay.classList.add("overlay", "hidden");
  overlay.id = `overlay-${modalId}`;
  modal.classList.add("modal-card", "hidden");
  modal.id = `modal-${modalId}`;

  // Append modal and overlay to the body
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  // Set modal content dynamically
  modal.innerHTML = contentHtml;

  // Show the modal
  if (triggerElement) {
    triggerElement.addEventListener("click", () => {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });
  }

  // Close modal on overlay click or close button click
  if (overlay) {
    overlay.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  }

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

// Utility function to add link click listeners
function addLinkClickListeners(modal, overlay) {
  const links = modal.querySelectorAll(".recipe-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  });
}

////************************************************ Healthy Recipes

const healthyRecipesArray = [
  "Grilled Chicken Salad",
  "Quinoa and Avocado Bowl",
  "Zucchini Noodles with Pesto",
  "Baked Salmon with Vegetables",
  "Vegetable Stir Fry",
  "Spinach and Feta Omelette",
  "Roasted Sweet Potato and Chickpea Salad",
  "Greek Yogurt Parfait with Berries",
  "Lentil Soup",
  "Kale and Apple Salad",
  "Tofu and Broccoli Stir Fry",
  "Whole Grain Pasta Primavera",
  "Brown Rice and Black Bean Bowl",
  "Stuffed Bell Peppers",
  "Oven-Roasted Brussels Sprouts",
  "Homemade Vegetable Soup",
  "Cucumber and Hummus Wrap",
  "Mango and Spinach Smoothie",
  "Cauliflower Rice Bowl",
];

// Modal content for healthy recipes
const healthyRecipiesContent = `
  <div class="modal-card-header">
    <h3>
      <span>Healthy Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
  </div>
  <div class="modal-card-body healthy-recipes-links">  </div>
  
`;

// seasonal recipes link
const healthyRecipesLink = document.querySelector(".nav-healthy-recipies");
createModal(healthyRecipesLink, healthyRecipiesContent, "healthyRecipes");

function healthyRecipesShow() {
  const healthyRecipesDiv = document.querySelector(".healthy-recipes-links");
  let innerContent = ``;
  for (let item of healthyRecipesArray) {
    innerContent += `
    <p> 👉 <a href="#" class="recipe-link"> ${item} </a>
    `;
  }
  healthyRecipesDiv.innerHTML = innerContent;

  // Re-attach link click listeners
  const modal = document.querySelector("#modal-healthyRecipes");
  const overlay = document.querySelector("#overlay-healthyRecipes");
  addLinkClickListeners(modal, overlay);
}

healthyRecipesShow();

////******************************** Ingredients

const ingredientsArray = [
  "Tomato",
  "Onion",
  "Garlic",
  "Spinach",
  "Chicken",
  "Flour",
  "Sugar",
  "Butter",
  "Carrot",
  "Potato",
  "Broccoli",
  "Cauliflower",
  "Cucumber",
  "Egg",
  "Milk",
  "Cheese",
  "Rice",
  "Pasta",
];

// Modal content for ingredients
const ingredientsContent = `
  <div class="modal-card-header">
    <h3>
      <span>Ingredients</span>
      <button class="close-modal-card">&times;</button>
    </h3>
</div>
  <div class="modal-card-body ingredients-links">  </div>
`;

// Ingredient  link
const ingredientLink = document.querySelector(".nav-ingredients");
createModal(ingredientLink, ingredientsContent, "ingredients");

function ingredientsShow() {
  const ingredientsDiv = document.querySelector(".ingredients-links");
  let innerContent = ``;
  for (let item of ingredientsArray) {
    innerContent += `
    <p> 👉 <a href="#" class="recipe-link"> ${item} </a>
    `;
  }
  ingredientsDiv.innerHTML = innerContent;

  // Re-attach link click listeners
  const modal = document.querySelector("#modal-ingredients");
  const overlay = document.querySelector("#overlay-ingredients");
  addLinkClickListeners(modal, overlay);
}

ingredientsShow();

////********************************************** Seasonal

const seasonalContent = `
  <div class="modal-card-header seasonal-modal">
    <h3>
      <span>Seasonal Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
    <div class="modal-card-body seasonal-links">  </div>
 </div>
`;

// seasonal recipes link
const seasonalLink = document.querySelector(".nav-seasonal");
createModal(seasonalLink, seasonalContent, "seasonal");

// Modal content for seasonal
function seasonalShow() {
  const seasonalDiv = document.querySelector(".seasonal-links");
  seasonalDiv.innerHTML = `<p>👉 <a href="#" class="recipe-link"> Summer </a> </p>
  <p>👉 <a href="#" class="recipe-link"> Autumn (Fall) </a> </p>
  <p>👉 <a href="#" class="recipe-link"> Winter </a> </p>
  <p>👉 <a href="#" class="recipe-link"> Diwali recipes </a> </p>
  <p>👉 <a href="#" class="recipe-link"> Ramadan and Eid recipes  </a> </p>
  <p>👉 <a href="#" class="recipe-link">  Easter recipes </a> </p>
  <p>👉 <a href="#" class="recipe-link">  Christmas and New year recipes </a> </p>
  `;

  //Re-attach link click listeners
  const modal = document.querySelector("#modal-seasonal");
  const overlay = document.querySelector("#overlay-seasonal");
  addLinkClickListeners(modal, overlay);
}

seasonalShow();

module.exports = { createModal };
