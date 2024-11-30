function createSidebarContent() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
     <div class="sidebar-recipes">
        <div  class="sidebar-link-header"> 
         <img class="logo recipe-logo" src ="./style/assets/recipe-logo.svg" alt="logo" />
         <p>Recipes</p>
        </div>
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
// const sidebarLink = document.querySelectorAll(".sidebar-recipes-link");
// sidebarLink.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     link.classList.add("sidebar-visited");
//   });
// });
