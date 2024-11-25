function createSidebarContent() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
     <div class="sidebar-recipes">
        <a href="index.html" class="sidebar-link"> 
         <img class="logo recipe-logo" src ="./style/assets/recipe-logo.svg" alt="logo" />
         <p>Recipes</p>
        </a>
       </div>
       `;
  }
}

createSidebarContent();

function appendRecipeDropdown() {
  const sidebarRecipe = document.querySelector(".sidebar-recipes");
  if (sidebarRecipe) {
    recipeDiv = document.createElement("div");
    recipeDiv.classList.add("dropdown-content");
    recipeDiv.innerHTML = `
      <ul class="sidebar-recipes-list"> 
      <li> <a href="#" class="sidebar-recipes-link" >Breakfast</a> </li> 
      <li> <a href="#" class="sidebar-recipes-link" >Lunch</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Dinner</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Desserts</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Snacks</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Low Carb</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Keto</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Italian</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Mexican</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Chinese</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Indian</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Japanese</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >Mediterranean</a> </li>
      <li> <a href="#" class="sidebar-recipes-link" >American</a> </li>
      </ul>
        `;
    sidebarRecipe.appendChild(recipeDiv);
  }
}

appendRecipeDropdown();

module.exports = { createSidebarContent, appendRecipeDropdown };

// // when the sidebar link clicked it must have some different color
// const sidebarLink = document.querySelectorAll(".sidebar-link");
// sidebarLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.querySelector("p").classList.add("visited-p");
//   });
// });

//******************** Recipe link with drowpdown
// here we are capture the event in capture phase

// sidebarRecipe.addEventListener("click", (e) => {
//   // we need to prevent the refreshing the page otherwise list will disappear and prevent the event to propagate in bublephase otherwise it will make list to disappear again
//   e.preventDefault();
//   e.stopPropagation();
//   // Check if the dropdown already exists
//   let recipeDiv = document.querySelector(".dropdown-content");
//   if (!recipeDiv) {
//     recipeDiv = document.createElement("div");
//     recipeDiv.classList.add("dropdown-content");
//     recipeDiv.innerHTML = `
//       <ul class="sidebar-recipes-list">
//       <li> <a href="#">Breakfast Recipes</a> </li>
//       <li> <a href="#">Lunch Recipes</a> </li>
//       <li> <a href="#">Dinner Recipes</a> </li>
//       <li> <a href="#">Desserts</a> </li>
//       <li> <a href="#">Snacks</a> </li>
//       <li> <a href="#">Low-Carb Recipes</a> </li>
//       <li> <a href="#">Keto Recipes</a> </li>
//       <li> <a href="#">Italian</a> </li>
//       <li> <a href="#">Mexican</a> </li>
//       <li> <a href="#">Chinese</a> </li>
//       <li> <a href="#">Indian</a> </li>
//       <li> <a href="#">Japanese</a> </li>
//       <li> <a href="#">Mediterranean</a> </li>
//       <li> <a href="#">American</a> </li>
//       </ul>
//     `;
//     sidebarRecipe.appendChild(recipeDiv);
//   } else {
//     sidebarRecipe.removeChild(recipeDiv);
//   }
// });
