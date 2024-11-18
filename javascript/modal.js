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
  "Baked Turkey Meatballs",
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
createModal(healthyRecipesLink, healthyRecipiesContent);

function healthyRecipesShow() {
  const healthyRecipesDiv = document.querySelector(".healthy-recipes-links");
  let innerContent = ``;
  for (let item of healthyRecipesArray) {
    innerContent += `
    <p> 👉 <a href="#" class="recipe-link"> ${item} </a>
    `;
  }
  healthyRecipesDiv.innerHTML = innerContent;
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
createModal(ingredientLink, ingredientsContent);

function ingredientsShow() {
  const ingredientsDiv = document.querySelector(".ingredients-links");
  let innerContent = ``;
  for (let item of ingredientsArray) {
    innerContent += `
    <p> 👉 <a href="#"> ${item} </a>
    `;
  }
  ingredientsDiv.innerHTML = innerContent;
}

ingredientsShow();

////********************************************** Seasonal

// Modal content for seasonal
const seasonalContent = `
  <div class="modal-card-header">
    <h3>
      <span>Seasonal Recipes</span>
      <button class="close-modal-card">&times;</button>
    </h3>
 </div>
  <p>👉 <a href="#"> Summer </a> </p>
  <p>👉 <a href="#"> Autumn (Fall) </a> </p>
  <p>👉 <a href="#"> Winter </a> </p>
  <p>👉 <a href="#"> Diwali recipes </a> </p>
  <p>👉 <a href="#"> Ramadan and Eid recipes  </a> </p>
  <p>👉 <a href="#">  Easter recipes </a> </p>
  <p>👉 <a href="#">  Christmas and New year recipes </a> </p>
  `;

// healthy recipes link
const seasonalLink = document.querySelector(".nav-seasonal");
createModal(seasonalLink, seasonalContent);
