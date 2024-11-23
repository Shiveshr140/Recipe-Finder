const sidebar = document.querySelector(".sidebar");
function createSidebarContent() {
  sidebar.innerHTML = `
     
       <div class="sidebar-recipes">
        <a href="index.html" class="sidebar-link"> 
         <img class="logo recipe-logo" src ="./style/assets/recipe-logo.svg" alt="logo" />
         <p>Recipes</p>
        </a>
       </div>
       `;
}

createSidebarContent();

// // when the sidebar link clicked it must have some different color
// const sidebarLink = document.querySelectorAll(".sidebar-link");
// sidebarLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.querySelector("p").classList.add("visited-p");
//   });
// });

//******************** Recipe link with drowpdown
// here we are capture the event in capture phase

const sidebarRecipe = document.querySelector(".sidebar-recipes");

recipeDiv = document.createElement("div");
recipeDiv.classList.add("dropdown-content");
recipeDiv.innerHTML = `
      <ul class="sidebar-recipes-list"> 
      <li> <a href="#">Breakfast</a> </li> 
      <li> <a href="#">Lunch</a> </li>
      <li> <a href="#">Dinner</a> </li>
      <li> <a href="#">Desserts</a> </li>
      <li> <a href="#">Snacks</a> </li>
      <li> <a href="#">Low Carb</a> </li>
      <li> <a href="#">Keto</a> </li>
      <li> <a href="#">Italian</a> </li>
      <li> <a href="#">Mexican</a> </li>
      <li> <a href="#">Chinese</a> </li>
      <li> <a href="#">Indian</a> </li>
      <li> <a href="#">Japanese</a> </li>
      <li> <a href="#">Mediterranean</a> </li>
      <li> <a href="#">American</a> </li>
      </ul>
    `;
sidebarRecipe.appendChild(recipeDiv);

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
