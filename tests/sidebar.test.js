const { beforeEach, test, expect } = require("@jest/globals");
const {
  createSidebarContent,
  appendRecipeDropdown,
} = require("../javascript/sidebar");

describe("createSidebarContent()", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="sidebar"> </div>`;
  });

  test("Should create sidebar content with correct HTML structure", () => {
    createSidebarContent();

    const sidebar = document.querySelector(".sidebar");
    const sidebarRecipeLink = document.querySelector(".sidebar-link");
    const logo = sidebarRecipeLink.querySelector(".recipe-logo");

    expect(sidebar).not.toBeNull();
    expect(sidebarRecipeLink).not.toBeNull();
    expect(logo.getAttribute("src")).toBe("./style/assets/recipe-logo.svg");
    expect(sidebar.innerHTML).toContain("Recipes");
  });

  test("Should have all sidebar links", () => {
    document.body.innerHTML = `
      <div class="sidebar">
        <div class="sidebar-recipes"></div>
      </div>
    `;

    appendRecipeDropdown();
    const sidebar = document.querySelector(".sidebar");
    const dropDown = sidebar.querySelector(".dropdown-content");

    expect(dropDown).not.toBeNull();
    expect(dropDown.innerHTML).toContain("Breakfast Recipes");
  });
});
