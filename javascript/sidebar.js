const sidebar = document.querySelector(".sidebar");
function createSidebarContent() {
  sidebar.innerHTML = `
       <p> Sidebar </p>
       <div class="sidebar-link">
        <img class="logo recipe-logo" src="./style/assets/recipe-logo.svg" alt="logo" />
        <p> Recipies </p>
       </div>
       <div class="sidebar-link">
        <img class="logo recipe-logo" src ="./style/assets/recipe-logo.svg" alt="logo" />
        <p>Ingredient</p>
       </div>
       <div class="sidebar-link">
        <img class="logo recipe-logo" src ="./style/assets/recipe-logo.svg" alt="logo" />
        <p> Recipies </p>
       </div>
    `;
}

createSidebarContent();
