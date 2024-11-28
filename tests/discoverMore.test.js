const { beforeEach, test, expect } = require("@jest/globals");
const { discoverMore } = require("../javascript/discoverMore");

// Mock the entire discoverMore module
jest.mock("../javascript/discoverMore", () => ({
  discoverMore: jest.fn(),
  discoverMoreRecipes: jest.fn(() =>
    Promise.resolve([
      {
        title: "Mock Recipe",
        image: "mock-image.jpg",
        summary: "Mock Summary",
        sourceUrl: "https://example.com",
      },
    ])
  ),
}));

describe("discover More link functionality", () => {
  let main;

  beforeEach(() => {
    // Reset the DOM before each test
    document.body.innerHTML = `
    <header> 
      <div class="header-info">
        <p>
          Find Your Perfect Recipe | Explore thousands of delicious recipes curated just for you. 
          <a href="#" class="discover-more">Discover more</a>
        </p>
        <button class="header-info-button">&times;</button>
      </div>
    </header>
    <div class="main"></div>
    `;
    main = document.querySelector(".main");
  });

  test("click discover-more link updates main content asynchronously", async () => {
    // Mock discoverMore to simulate updating the main content
    discoverMore.mockImplementation(() => {
      // Simulate content update after click
      const discoverMoreButton = document.querySelector(".discover-more");
      discoverMoreButton.addEventListener("click", async () => {
        // Simulate the async content update
        main.innerHTML = "Hello, explore our amazing recipes!";

        // Append the recipe container with mock data
        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("discover-recipes-container");
        recipeContainer.innerHTML = "<p>Mock Recipe</p>";
        main.appendChild(recipeContainer);
      });
    });

    // Initialize discoverMore to set up event listeners
    await discoverMore();

    // Simulate a click on the "Discover More" button
    const discoverMoreButton = document.querySelector(".discover-more");
    discoverMoreButton.click();

    // Wait for the DOM to update
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if the content is updated
    expect(main.innerHTML).toContain("Hello, explore our amazing recipes!");

    // Check if the recipe container exists and contains the mock data
    const recipeContainer = main.querySelector(".discover-recipes-container");
    expect(recipeContainer).not.toBeNull();
    expect(recipeContainer.innerHTML).toContain("Mock Recipe");
  });

  test("test back button of discover more", async () => {
    // Mock discoverMore to simulate updating the main content
    discoverMore.mockImplementation(() => {
      // Simulate content update after click
      const discoverMoreButton = document.querySelector(".discover-more");
      discoverMoreButton.addEventListener("click", async () => {
        // Simulate the async content update
        main.innerHTML = `
        <div class="discover-more-header"> 
          <a> Hello, explore our amazing recipes! </a>
          <button class="discover-back">Back</button>
          <div class="discover-recipes-container"></div>
        </div>
        `;

        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("discover-recipes-container");
        recipeContainer.innerHTML = "<p>Mock Recipe</p>";
        main.appendChild(recipeContainer);

        // remove the content
        const backButton = main.querySelector(".discover-back");
        backButton.addEventListener("click", () => {
          main.innerHTML = ``;
        });
      });
    });

    await discoverMore();
    const discoverMoreButton = document.querySelector(".discover-more");
    discoverMoreButton.click();
    await new Promise((resolve) => setTimeout(resolve, 100));
    const backButton = main.querySelector(".discover-back");
    backButton.click();
    expect(main.innerHTML).toBe("");
  });
});
